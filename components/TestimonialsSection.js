'use client';

import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

/**
 * Testimonials Section Component
 * Customer reviews and testimonials
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Staines',
      rating: 5,
      text: 'The Bogfather did an amazing job on our bathroom renovation. Professional, punctual, and the quality of work was outstanding. Highly recommend!',
      service: 'Bathroom Renovation',
    },
    {
      name: 'James Thompson',
      location: 'Egham',
      rating: 5,
      text: 'Called them for an emergency boiler repair and they came out the same day. Fixed the problem quickly and at a fair price. Excellent service!',
      service: 'Boiler Repair',
    },
    {
      name: 'Emma Richardson',
      location: 'Ashford',
      rating: 5,
      text: 'We\'ve used The Bogfather for all our plumbing needs over the years. Always reliable, honest, and they do great work. Wouldn\'t use anyone else!',
      service: 'General Plumbing',
    },
    {
      name: 'Michael Davies',
      location: 'Sunbury',
      rating: 5,
      text: 'Had a new heating system installed. The team was professional, clean, and explained everything clearly. Very happy with the results.',
      service: 'Heating Installation',
    },
    {
      name: 'Lisa Anderson',
      location: 'Shepperton',
      rating: 5,
      text: 'Fantastic service from start to finish. They transformed our dated bathroom into a modern space. Attention to detail was impressive!',
      service: 'Bathroom Renovation',
    },
    {
      name: 'David Wilson',
      location: 'Weybridge',
      rating: 5,
      text: 'Very professional and knowledgeable. Fixed our persistent leak that others couldn\'t solve. Great communication throughout. Highly recommended!',
      service: 'Leak Repair',
    },
  ];

  // Group testimonials into chunks of 3 for desktop view
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }

  return (
    <section id="testimonials" className="py-5">
      <Container>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="text-center text-secondary mb-5 fs-5">
          Don't just take our word for it - hear from our satisfied customers
        </p>

        {/* Desktop Carousel - Shows 3 cards */}
        <div className="d-none d-lg-block">
          <Carousel indicators={true} controls={true} interval={5000}>
            {testimonialGroups.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <Row className="g-4 pb-5">
                  {group.map((testimonial, index) => (
                    <Col key={index} lg={4}>
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="d-flex flex-column">
                          <div className="mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <i key={i} className="fas fa-star text-warning"></i>
                            ))}
                          </div>
                          <Card.Text className="flex-grow-1 mb-4 fst-italic">
                            "{testimonial.text}"
                          </Card.Text>
                          <div className="mt-auto">
                            <div className="d-flex align-items-center">
                              <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>
                                {testimonial.name.charAt(0)}
                              </div>
                              <div>
                                <div className="fw-bold">{testimonial.name}</div>
                                <small className="text-secondary">{testimonial.location}</small>
                                <div>
                                  <small className="badge bg-secondary mt-1">
                                    {testimonial.service}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Mobile/Tablet Carousel - Shows 1 card */}
        <div className="d-lg-none">
          <Carousel indicators={true} controls={true} interval={5000}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="pb-5 px-2">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-warning"></i>
                        ))}
                      </div>
                      <Card.Text className="flex-grow-1 mb-4 fst-italic">
                        "{testimonial.text}"
                      </Card.Text>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="fw-bold">{testimonial.name}</div>
                            <small className="text-secondary">{testimonial.location}</small>
                            <div>
                              <small className="badge bg-secondary mt-1">
                                {testimonial.service}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Trust Badges */}
        <Row className="mt-5 pt-4">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center gap-4 align-items-center">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary-custom">20+</div>
                <div className="text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-primary-custom">500+</div>
                <div className="text-secondary">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-primary-custom">100%</div>
                <div className="text-secondary">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="display-4 fw-bold text-primary-custom">24/7</div>
                <div className="text-secondary">Emergency Service</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}