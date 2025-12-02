'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';

/**
 * Services Section Component
 * Showcase of all services offered
 */
export default function ServicesSection() {
  const services = [
    {
      title: 'Plumbing',
      description: 'From leaky taps to full pipe installations, we handle all your plumbing needs with expertise and precision.',
      icon: 'fa-wrench',
      image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Heating',
      description: 'Keep your home warm with our comprehensive heating solutions, including radiator installation and repairs.',
      icon: 'fa-fire',
      image: 'https://images.unsplash.com/photo-1731694411560-050e5b91e943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwyfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Bathroom Renovations',
      description: 'Transform your bathroom into a luxurious space with our complete renovation services and expert design.',
      icon: 'fa-bath',
      image: 'https://images.unsplash.com/photo-1620825141088-a824daf6a46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwzfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Boiler Services',
      description: 'Professional boiler installation, servicing, and repairs to ensure your heating system runs efficiently.',
      icon: 'fa-cog',
      image: 'https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHw1fHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'General Maintenance',
      description: 'Regular maintenance and emergency repairs to keep your plumbing and heating systems in top condition.',
      icon: 'fa-tools',
      image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHw0fHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Emergency Call-Outs',
      description: '24/7 emergency service for urgent plumbing and heating issues. We\'re here when you need us most.',
      icon: 'fa-phone-volume',
      image: 'https://images.unsplash.com/photo-1581166418878-11f0dde922c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRvb2xzJTIwZXF1aXBtZW50fGVufDB8MHx8fDE3NjQ2NzMyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-secondary mb-5 fs-5">
          Comprehensive plumbing and heating solutions for your home
        </p>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 service-card">
                <div className="position-relative" style={{ height: '200px' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="card-img-top"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-3">
                    <i className={`fas ${service.icon} fs-1 text-primary-custom`}></i>
                  </div>
                  <Card.Title className="text-center h4 mb-3">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-center flex-grow-1">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <p className="lead mb-4">
            Need help with any of these services?
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="#contact" className="btn btn-primary btn-lg">
              Get a Free Quote
            </a>
            <a href="tel:01784690990" className="btn btn-outline-primary btn-lg">
              <i className="fas fa-phone me-2"></i>
              Call Us Now
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}