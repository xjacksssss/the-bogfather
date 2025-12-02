import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Contact Form API Route
 * Handles form submissions and sends emails via SMTP
 * 
 * CRITICAL: Uses exact environment variable names required by deployment system:
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_USER
 * - SMTP_PASS
 * - CONTACT_EMAIL
 */

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

/**
 * Check rate limit for IP address
 */
function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = userRequests.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return true;
}

/**
 * Validate form data
 */
function validateFormData(data) {
  const errors = {};

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!data.phone || typeof data.phone !== 'string') {
    errors.phone = 'Phone number is required';
  }

  if (!data.service || typeof data.service !== 'string') {
    errors.service = 'Service selection is required';
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * POST handler for contact form
 */
export async function POST(request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate form data
    const { isValid, errors } = validateFormData(body);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Check required environment variables
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars);
      return NextResponse.json(
        { error: 'Server configuration error. Please contact us by phone.' },
        { status: 500 }
      );
    }

    // Create transporter with EXACT environment variable names
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: body.email,
      subject: `New Contact Form Submission - ${body.service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #491313; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f5f5f5; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #491313; }
            .value { margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${body.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${body.phone}">${body.phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Service Requested:</div>
                <div class="value">${body.service}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${body.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from The Bogfather website contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Service Requested: ${body.service}

Message:
${body.message}

---
Submitted on: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us by phone.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

/**
 * GET handler - return method not allowed
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}