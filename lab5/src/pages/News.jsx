import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { newLists } from '../data/newsData';

function News() {
  return (
    <Container className="my-5 py-4">
      <h2 className="news-heading mb-4">News Category</h2>
      <Row className="g-4">
        {newLists.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="news-card h-100 shadow-sm border-0">
              <div className="news-card-img-wrapper">
                <Card.Img
                  variant="top"
                  src={`/${item.images}`}
                  alt={item.title}
                  className="news-card-img"
                />
              </div>
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="news-card-title">{item.title}</Card.Title>
                <Card.Text className="news-card-desc flex-grow-1 text-muted">
                  {item.description}
                </Card.Text>
                <div className="mt-3">
                  <Link to={`/news/${item.id}`} className="news-card-link text-primary fw-semibold">
                    {item.title}
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
