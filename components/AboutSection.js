'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

/**
 * About Section Component
 * Company background and experience
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="position-relative">
              <Image
                src="https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHRlYW18ZW58MHwwfHx8MTc2NDY3MzIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional plumbing equipment and tools"
                width={600}
                height={500}
                className="rounded shadow-lg"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
              <div 
                className="position-absolute bottom-0 start-0 bg-primary-custom text-white p-4 rounded m-3"
                style={{ maxWidth: '250px' }}
              >
                <div className="display-4 fw-bold" style={{ color: 'var(--color-secondary)' }}>20+</div>
                <div className="h5 mb-0">Years of Excellence</div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div>
              <h2 className="section-title text-start mb-4">
                About The Bogfather
              </h2>
              <div className="mb-2" style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)' }}></div>
              
              <p className="lead mt-4 mb-4">
                The Bogfather has been providing reliable and professional plumbing, 
                heating, and bathroom renovation services to homeowners and property 
                managers in the local area for over 20 years.
              </p>

              <p className="mb-4">
                Our team of fully licensed and insured tradesmen are committed to 
                delivering quality workmanship and exceptional customer service on 
                every job. We understand that plumbing and heating issues can be 
                stressful, which is why we pride ourselves on being responsive, 
                reliable, and professional.
              </p>

              <p className="mb-4">
                Whether you need a simple repair, a complete bathroom renovation, 
                or emergency plumbing services, The Bogfather has the expertise 
                and experience to get the job done right the first time.
              </p>

              {/* Key Points */}
              <div className="mt-4">
                <Row className="g-3">
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle text-accent fs-4 me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Fully Licensed</h5>
                        <p className="text-secondary small mb-0">
                          All work carried out to industry standards
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle text-accent fs-4 me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Fully Insured</h5>
                        <p className="text-secondary small mb-0">
                          Complete peace of mind for every job
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle text-accent fs-4 me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">24/7 Emergency</h5>
                        <p className="text-secondary small mb-0">
                          Available when you need us most
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle text-accent fs-4 me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Free Quotes</h5>
                        <p className="text-secondary small mb-0">
                          No obligation, transparent pricing
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}