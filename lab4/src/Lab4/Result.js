// Result.js - Uses useContext Hook to access final score
import React from 'react';
import { useQuiz } from './QuizContext';

function Result() {
  // useContext: access score, total questions, and restart handler from context
  const { score, questions, handleRestart } = useQuiz();
  const total = questions.length;
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
          <span className="summary-label">Total</span>
          <span className="summary-value">{total}</span>
        </div>
      </div>
      <button className="btn-restart" onClick={handleRestart}>
        Play Again
      </button>
    </div>
  );
}

export default Result;
