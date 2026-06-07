import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { question, questionNumber, onAnswer } = this.props;

    return (
      <div>
        <h2>Question {questionNumber}</h2>
        <p>{question.question}</p>
        <ul>
          {question.options.map((option, index) => (
            <li key={index} onClick={() => onAnswer(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Question;
