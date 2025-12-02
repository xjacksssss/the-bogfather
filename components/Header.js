'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

/**
 * Header Component
 * Sticky navigation header with mobile menu
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="white"
      className={`py-3 ${scrolled ? 'shadow-sm' : ''}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="d-flex align-items-center"
        >
          <span style={{ fontSize: '1.8rem', fontWeight: '900' }}>The Bogfather</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className={activeSection === 'services' ? 'active' : ''}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}
              className={activeSection === 'testimonials' ? 'active' : ''}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="tel:01784690990"
              className="btn btn-primary text-white ms-lg-3 mt-2 mt-lg-0"
              style={{ borderRadius: '5px' }}
            >
              <i className="fas fa-phone me-2"></i>
              01784 690 990
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}