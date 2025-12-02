'use client';

import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';

/**
 * Contact Section Component
 * Contact form and business information
 */
export default function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-secondary mb-5 fs-5">
          Ready to start your project? Contact us today for a free quote
        </p>

        <Row className="g-5">
          {/* Contact Form */}
          <Col lg={7}>
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <h3 className="h4 mb-4">Send Us a Message</h3>
              <ContactForm />
            </div>
          </Col>

          {/* Contact Information */}
          <Col lg={5}>
            <div className="h-100">
              <h3 className="h4 mb-4">Contact Information</h3>
              
              {/* Phone */}
              <div className="d-flex align-items-start mb-4 p-3 bg-white rounded shadow-sm">
                <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <a href="tel:01784690990" className="text-decoration-none fs-5 fw-bold">
                    01784 690 990
                  </a>
                  <p className="text-secondary small mb-0 mt-1">
                    Available for calls and emergencies
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-start mb-4 p-3 bg-white rounded shadow-sm">
                <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="mb-1">Email</h5>
                  <a href="mailto:info@bogfather.co.uk" className="text-decoration-none">
                    info@bogfather.co.uk
                  </a>
                  <p className="text-secondary small mb-0 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="d-flex align-items-start mb-4 p-3 bg-white rounded shadow-sm">
                <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h5 className="mb-1">Business Hours</h5>
                  <p className="mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="mb-0">Sunday: Emergency calls only</p>
                </div>
              </div>

              {/* Emergency Service */}
              <div className="bg-accent text-white p-4 rounded shadow-sm">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-exclamation-triangle fs-3 me-3"></i>
                  <h5 className="mb-0 text-white">24/7 Emergency Service</h5>
                </div>
                <p className="mb-0">
                  Plumbing emergency? We're available around the clock for urgent repairs.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}