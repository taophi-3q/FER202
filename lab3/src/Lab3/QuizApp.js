import React, { Component } from "react";
import Question from "./Question";
import Score from "./Score";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleReplay = this.handleReplay.bind(this);
  }

  handleAnswer(selectedOption) {
    const { questions, currentQuestion, score } = this.state;
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    const newScore = isCorrect ? score + 1 : score;
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion >= questions.length) {
      this.setState({
        score: newScore,
        quizEnd: true,
      });
    } else {
      this.setState({
        score: newScore,
        currentQuestion: nextQuestion,
      });
    }
  }

  handleReplay() {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  }

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div>
        {quizEnd ? (
          <Score score={score} onReplay={this.handleReplay} />
        ) : (
          <Question
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            onAnswer={this.handleAnswer}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
