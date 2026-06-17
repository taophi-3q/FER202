// Question.js - Uses useContext Hook to access quiz state
import React from 'react';
import { useQuiz } from './QuizContext';

function Question() {
  // useContext: access selectedAnswer and answered from context
  const { questions, currentQuestion, selectedAnswer, answered, handleSelectAnswer } = useQuiz();

  const currentQ = questions[currentQuestion];

  const getOptionClass = (option) => {
    if (!answered) {
      return selectedAnswer === option ? 'option selected' : 'option';
    }
    if (option === currentQ.correctAnswer) return 'option correct';
    if (option === selectedAnswer && option !== currentQ.correctAnswer) return 'option wrong';
    return 'option';
  };

  return (
    <div className="question-card">
      <h2 className="question-text">{currentQ.question}</h2>
      <ul className="options-list">
        {currentQ.answers.map((answer, index) => (
          <li key={index}>
            <button
              className={getOptionClass(answer)}
              onClick={() => handleSelectAnswer(answer)}
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

export default Question;
