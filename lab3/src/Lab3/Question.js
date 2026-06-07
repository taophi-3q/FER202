import React, { Component } from "react";

class Question extends Component {
  render() {
    const { question, selectedAnswer, onSelectAnswer, onSubmitAnswer } = this.props;

    return (
      <div className="quiz-question-card">
        <h2>{question.question}</h2>
        <ul className="options-list">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const optionLetter = String.fromCharCode(65 + index); // A, B, C, D...
            return (
              <li
                key={index}
                className={`option-item ${isSelected ? "selected" : ""}`}
                onClick={() => onSelectAnswer(option)}
              >
                <span className="option-bullet">{optionLetter}</span>
                <span className="option-text">{option}</span>
              </li>
            );
          })}
        </ul>
        <div className="quiz-footer">
          <button
            className="btn btn-primary"
            onClick={onSubmitAnswer}
            disabled={selectedAnswer === null}
          >
            Submit Answer
          </button>
        </div>
      </div>
    );
  }
}

export default Question;
