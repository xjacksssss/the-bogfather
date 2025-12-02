'use client';

import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer Component
 * Site footer with contact info, quick links, and social media
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <h5 className="mb-3">The Bogfather</h5>
            <p className="text-white-50">
              Trusted plumbing and heating experts serving the local community 
              for over 20 years with quality workmanship and exceptional service.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.instagram.com/the_bogfather_plumbing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="Visit our Instagram page"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white-50">Home</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50">Services</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white-50">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-white-50">Testimonials</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-white-50">Plumbing</li>
              <li className="mb-2 text-white-50">Heating</li>
              <li className="mb-2 text-white-50">Bathroom Renovations</li>
              <li className="mb-2 text-white-50">Boiler Services</li>
              <li className="mb-2 text-white-50">General Maintenance</li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:01784690990" className="text-white-50">
                  01784 690 990
                </a>
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:info@bogfather.co.uk" className="text-white-50">
                  info@bogfather.co.uk
                </a>
              </li>
              <li className="mb-2 text-white-50">
                <i className="fas fa-clock me-2"></i>
                24/7 Emergency Service
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 bg-white opacity-25" />

        <Row>
          <Col className="text-center">
            <p className="text-white-50 mb-0">
              &copy; {currentYear} The Bogfather. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}