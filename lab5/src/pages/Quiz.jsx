import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { quizzes } from '../data/quizData';

// Separate Question Component (as requested: "use a separate component to display each question")
function QuestionComponent({ questionData, selectedAnswer, answered, onSelectAnswer }) {
  const getOptionClass = (option) => {
    if (!answered) {
      return selectedAnswer === option ? 'option-btn selected' : 'option-btn';
    }
    if (option === questionData.correctAnswer) return 'option-btn correct';
    if (option === selectedAnswer && option !== questionData.correctAnswer) return 'option-btn wrong';
    return 'option-btn';
  };

  return (
    <div className="question-card">
      <h2 className="question-text">{questionData.question}</h2>
      <ul className="options-list">
        {questionData.answers.map((answer, index) => (
          <li key={index}>
            <button
              className={getOptionClass(answer)}
              onClick={() => onSelectAnswer(answer)}
              disabled={answered}
            >
              <span className="option-label">
                {String.fromCharCode(65 + index)}.
              </span>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Separate Result Component (as in Lab 4)
function ResultComponent({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return { text: 'Perfect Score! 🏆', cls: 'msg-perfect' };
    if (percentage >= 80) return { text: 'Great Job! 🎉', cls: 'msg-great' };
    if (percentage >= 60) return { text: 'Good Effort! 👍', cls: 'msg-good' };
    return { text: 'Keep Practicing! 💪', cls: 'msg-practice' };
  };

  const { text, cls } = getMessage();

  return (
    <div className="result-card">
      <div className="result-icon">🎯</div>
      <h2 className="result-title">Quiz Completed!</h2>
      <p className={`result-message ${cls}`}>{text}</p>
      
      <div className="result-score-circle">
        <span className="result-score-number">{score}</span>
        <span className="result-score-total">/ {total}</span>
      </div>
      <p className="result-percentage">{percentage}% correct</p>
      
      <div className="result-summary">
        <div className="summary-item">
          <span className="summary-label">Correct</span>
          <span className="summary-value correct-val">{score}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Wrong</span>
          <span className="summary-value wrong-val">{total - score}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Questions</span>
          <span className="summary-value">{total}</span>
        </div>
      </div>
      
      <div className="d-flex justify-content-center gap-3">
        <Button variant="danger" className="px-4 py-2" onClick={onRestart}>
          Play Again
        </Button>
        <Link to="/quiz">
          <Button variant="secondary" className="px-4 py-2">
            Back to Quizzes
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Main Quiz Page component
function Quiz() {
  const { quizId } = useParams();
  const activeQuiz = quizzes.find((q) => q.id === quizId);

  if (!activeQuiz) {
    return (
      <Container className="my-5 py-5 text-center">
        <h2 className="text-danger">Quiz Category Not Found</h2>
        <Link to="/quiz">
          <Button variant="danger" className="mt-3">Back to Quizzes</Button>
        </Link>
      </Container>
    );
  }

  const { title: quizTitle, questions } = activeQuiz;

  // State hooks
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Dynamic Title Update via useEffect with cleanup
  useEffect(() => {
    if (showResult) {
      document.title = `Quiz Done! Score: ${score}/${questions.length}`;
    } else {
      document.title = `Question ${currentQuestion + 1} of ${questions.length} - ${quizTitle}`;
    }
    return () => {
      document.title = 'FPT University - Pizza & Quiz Portal';
    };
  }, [currentQuestion, showResult, score, questions.length, quizTitle]);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    setAnswered(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowResult(false);
  };

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        {showResult ? (
          <ResultComponent
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        ) : (
          <>
            <div className="quiz-header">
              <h1 className="quiz-title">{quizTitle}</h1>
              <div className="quiz-progress">
                <span className="progress-text">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="quiz-score-badge">Score: {score}</div>
            </div>

            <QuestionComponent
              questionData={currentQ}
              selectedAnswer={selectedAnswer}
              answered={answered}
              onSelectAnswer={handleSelectAnswer}
            />

            {answered && (
              <div className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect
                  ? '✓ Correct Answer!'
                  : `✗ Incorrect! Correct answer: ${currentQ.correctAnswer}`}
              </div>
            )}

            <button
              className="btn-next mt-4"
              onClick={handleNextQuestion}
              disabled={!answered}
            >
              {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
