'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

/**
 * Hero Section Component
 * Landing section with hero image and primary CTA
 */
export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="position-relative overflow-hidden" style={{ paddingTop: '100px', minHeight: '90vh' }}>
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
        <Image
          src="https://images.unsplash.com/photo-1553265381-674034b34554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHByb2Zlc3Npb25hbCUyMHdvcmt8ZW58MHwwfHx8MTc2NDY3MzIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional plumbing tools and equipment"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(73, 19, 19, 0.9) 0%, rgba(139, 0, 0, 0.85) 100%)' 
          }}
        />
      </div>

      <Container className="position-relative">
        <Row className="align-items-center" style={{ minHeight: '80vh' }}>
          <Col lg={8} xl={7}>
            <div className="text-white fade-in-up">
              <h1 className="display-3 fw-bold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Trusted Plumbing and Heating Experts Serving the Local Community
              </h1>
              <p className="lead mb-4 fs-4" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                Over 20 years of experience delivering quality workmanship and 
                exceptional customer service.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-5">
                <Button 
                  size="lg" 
                  className="btn-secondary px-4 py-3"
                  onClick={scrollToContact}
                >
                  Get a Free Quote
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  href="tel:01784690990"
                  className="px-4 py-3"
                >
                  <i className="fas fa-phone me-2"></i>
                  Call Us Today
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-5 pt-4 d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-secondary fs-3 me-2"></i>
                  <span className="text-white">Fully Licensed & Insured</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-secondary fs-3 me-2"></i>
                  <span className="text-white">24/7 Emergency Service</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-secondary fs-3 me-2"></i>
                  <span className="text-white">Free Quotes</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}