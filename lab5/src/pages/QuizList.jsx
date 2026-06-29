import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { quizzes } from '../data/quizData';

function QuizList() {
  return (
    <Container className="my-5 py-4">
      <h2 className="news-heading mb-4">Quiz Categories</h2>
      <p className="lead text-secondary mb-4">
        Select a quiz category below to start. Each quiz contains multiple choice questions.
      </p>
      <Row className="g-4">
        {quizzes.map((quiz) => (
          <Col key={quiz.id} xs={12} md={4}>
            <Card className="quiz-list-card h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold mb-2 text-dark">{quiz.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {quiz.description}
                </Card.Text>
                <div className="mt-4">
                  <Link to={`/quiz/${quiz.id}`} className="w-100 d-block">
                    <Button variant="danger" className="w-100 py-2 fw-semibold">
                      Start Quiz →
                    </Button>
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

export default QuizList;
