// QuizApp.js - Main component using useState, useEffect, useContext Hooks
import React, { useState, useEffect } from 'react';
import { QuizProvider, useQuiz } from './QuizContext';
import Question from './Question';
import Result from './Result';

// Inner component to access context
function QuizContent() {
  // useState: manage local UI state for page title
  const [pageTitle, setPageTitle] = useState('React Hooks Quiz');

  // useContext: access quiz state from QuizContext
  const {
    questions,
    currentQuestion,
    score,
    showResult,
    answered,
    isCorrect,
    handleNextQuestion,
  } = useQuiz();

  // useEffect: update the document title whenever the question changes
  useEffect(() => {
    if (showResult) {
      setPageTitle(`Quiz Done! Score: ${score}/${questions.length}`);
      document.title = `Quiz Done! Score: ${score}/${questions.length}`;
    } else {
      const title = `Question ${currentQuestion + 1} of ${questions.length}`;
      setPageTitle(title);
      document.title = `Lab 4 Quiz - ${title}`;
    }
  }, [currentQuestion, showResult, score, questions.length]);

  if (showResult) {
    return (
      <div className="quiz-wrapper">
        <Result />
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="quiz-header">
        <h1 className="quiz-title">{pageTitle}</h1>
        <div className="quiz-progress">
          <span className="progress-text">
            Question {currentQuestion + 1} / {questions.length}
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="quiz-score-badge">Score: {score}</div>
      </div>

      {/* Question component reads from useContext internally */}
      <Question />

      {answered && (
        <div className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect
            ? '✓ Correct!'
            : `✗ Wrong! Correct answer: ${questions[currentQuestion].correctAnswer}`}
        </div>
      )}

      <button
        className="btn-next"
        onClick={handleNextQuestion}
        disabled={!answered}
      >
        {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
}

// Root QuizApp wraps everything in QuizProvider (useContext setup)
function QuizApp() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}

export default QuizApp;
