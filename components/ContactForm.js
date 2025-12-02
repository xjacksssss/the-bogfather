'use client';

import { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

/**
 * Contact Form Component
 * Form with validation that submits to API route
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Plumbing',
    'Heating',
    'Bathroom Renovations',
    'Boiler Services',
    'General Maintenance',
    'Emergency Call-Out',
    'Other',
  ];

  /**
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'danger',
          message: data.error || 'Failed to send message. Please try again or call us directly.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'danger',
        message: 'An error occurred. Please try again or contact us by phone.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {submitStatus && (
        <Alert variant={submitStatus.type} dismissible onClose={() => setSubmitStatus(null)}>
          {submitStatus.message}
        </Alert>
      )}

      {/* Name */}
      <Form.Group className="mb-3">
        <Form.Label>Name *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
          placeholder="Your full name"
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Email */}
      <Form.Group className="mb-3">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Phone */}
      <Form.Group className="mb-3">
        <Form.Label>Phone *</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
          placeholder="Your phone number"
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Service */}
      <Form.Group className="mb-3">
        <Form.Label>Service Needed *</Form.Label>
        <Form.Select
          name="service"
          value={formData.service}
          onChange={handleChange}
          isInvalid={!!errors.service}
          disabled={isSubmitting}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.service}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Message */}
      <Form.Group className="mb-4">
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          isInvalid={!!errors.message}
          placeholder="Tell us about your project or issue..."
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          {errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Submit Button */}
      <Button
        variant="primary"
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-100"
      >
        {isSubmitting ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Sending...
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane me-2"></i>
            Send Message
          </>
        )}
      </Button>

      <p className="text-secondary small mt-3 mb-0 text-center">
        * Required fields. We respect your privacy and will never share your information.
      </p>
    </Form>
  );
}