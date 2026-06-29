import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5 py-4">
      <Row className="align-items-center">
        <Col md={5} className="text-center mb-4 mb-md-0">
          <Image
            src="/images/image5.png"
            alt="FPT Education Logo"
            fluid
            className="shadow-sm rounded p-3 bg-white"
            style={{ maxWidth: '380px' }}
          />
        </Col>
        <Col md={7}>
          <h2 className="fw-bold mb-3 text-uppercase text-danger border-bottom pb-2">
            About FPT University
          </h2>
          <p className="lead">
            FPT University is a private university in Vietnam, established in 2006 by the FPT Corporation, 
            Vietnam's leading information technology group.
          </p>
          <p>
            It is the first university in Vietnam to be established by an enterprise, pioneering a training model 
            associated closely with practical business needs, global standards, and international integration. 
            The curriculum integrates information technology, business administration, design, and foreign languages.
          </p>
          <p className="text-muted">
            FER202 - Front-End Web Development with React.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
