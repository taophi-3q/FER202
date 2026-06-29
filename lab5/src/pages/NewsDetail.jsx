import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { newLists } from '../data/newsData';

function NewsDetail() {
  const { id } = useParams();
  const newsItem = newLists.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <Container className="my-5 py-5 text-center">
        <h2 className="text-danger">News Article Not Found</h2>
        <Link to="/news">
          <Button variant="danger" className="mt-3">Back to News</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5 py-4">
      <Card className="border-0 shadow-lg p-4 bg-white" style={{ borderRadius: '12px' }}>
        <Row className="g-4 align-items-center">
          <Col md={5}>
            <Card.Img
              src={`/${newsItem.images}`}
              alt={newsItem.title}
              className="rounded shadow-sm"
              style={{ objectFit: 'cover', width: '100%', maxHeight: '400px' }}
            />
          </Col>
          <Col md={7}>
            <span className="badge bg-danger mb-2 px-3 py-2 text-uppercase fs-7">Culinary News</span>
            <h1 className="fw-bold mb-3 text-dark">{newsItem.title}</h1>
            <p className="lead text-secondary mb-4">{newsItem.description}</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum porta elementum. 
              Suspendisse pulvinar, eros sit amet pellentesque gravida, felis sapien scelerisque dolor, 
              porttitor dapibus diam velit vel dui. 
            </p>
            <div className="mt-4">
              <Link to="/news">
                <Button variant="danger" className="px-4 py-2 fw-semibold">
                  ← Back to News Category
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default NewsDetail;
