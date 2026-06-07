import React, { Component } from "react";
import Question from "./Question";
import Score from "./Score";
import "./QuizApp.css";

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
      mode: "setup", // 'setup' or 'quiz'
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: null,

      // Form fields
      newQuestionText: "",
      newOption1: "",
      newOption2: "",
      newOption3: "",
      newOption4: "",
      newCorrectAnswer: "Option 1",
    };

    this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.handleReplay = this.handleReplay.bind(this);
    this.handleResetSetup = this.handleResetSetup.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
  }

  handleSelectAnswer(option) {
    this.setState({ selectedAnswer: option });
  }

  handleSubmitAnswer() {
    const { questions, currentQuestion, score, selectedAnswer } = this.state;
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].answer;
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
        selectedAnswer: null, // Reset for next question
      });
    }
  }

  handleReplay() {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: null,
    });
  }

  handleResetSetup() {
    this.setState({
      mode: "setup",
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: null,
    });
  }

  handleAddQuestion(e) {
    e.preventDefault();
    const {
      newQuestionText,
      newOption1,
      newOption2,
      newOption3,
      newOption4,
      newCorrectAnswer,
      questions,
    } = this.state;

    if (
      !newQuestionText.trim() ||
      !newOption1.trim() ||
      !newOption2.trim() ||
      !newOption3.trim() ||
      !newOption4.trim()
    ) {
      alert("Please fill in the question and all 4 options.");
      return;
    }

    let answerText = "";
    if (newCorrectAnswer === "Option 1") answerText = newOption1.trim();
    else if (newCorrectAnswer === "Option 2") answerText = newOption2.trim();
    else if (newCorrectAnswer === "Option 3") answerText = newOption3.trim();
    else if (newCorrectAnswer === "Option 4") answerText = newOption4.trim();

    const newQ = {
      id: Date.now(),
      question: newQuestionText.trim(),
      options: [newOption1.trim(), newOption2.trim(), newOption3.trim(), newOption4.trim()],
      answer: answerText,
    };

    this.setState({
      questions: [...questions, newQ],
      newQuestionText: "",
      newOption1: "",
      newOption2: "",
      newOption3: "",
      newOption4: "",
      newCorrectAnswer: "Option 1",
    });
  }

  handleDeleteQuestion(id) {
    this.setState({
      questions: this.state.questions.filter((q) => q.id !== id),
    });
  }

  handleStartQuiz() {
    if (this.state.questions.length === 0) {
      alert("Please add at least one question to start the quiz.");
      return;
    }
    this.setState({
      mode: "quiz",
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: null,
    });
  }

  render() {
    const {
      questions,
      mode,
      currentQuestion,
      score,
      quizEnd,
      selectedAnswer,
      newQuestionText,
      newOption1,
      newOption2,
      newOption3,
      newOption4,
      newCorrectAnswer,
    } = this.state;

    if (mode === "setup") {
      return (
        <div className="quiz-container">
          <h1>Quiz Configurator</h1>
          <div className="setup-grid">
            <div className="question-list-section">
              <h3>Current Questions ({questions.length})</h3>
              <div className="question-items">
                {questions.length === 0 ? (
                  <p style={{ color: "var(--text-secondary)" }}>No questions yet. Add one on the right!</p>
                ) : (
                  questions.map((q, idx) => (
                    <div key={q.id} className="question-item">
                      <div className="question-item-content">
                        <h4>{idx + 1}. {q.question}</h4>
                        <p style={{ fontSize: '0.9rem', margin: '4px 0' }}>Options: {q.options.join(", ")}</p>
                        <span className="correct-badge">Correct: {q.answer}</span>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDeleteQuestion(q.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={this.handleStartQuiz}
                disabled={questions.length === 0}
              >
                Start Quiz
              </button>
            </div>

            <div>
              <h3>Add New Question</h3>
              <form onSubmit={this.handleAddQuestion}>
                <div className="form-group">
                  <label>Question Text</label>
                  <input
                    type="text"
                    value={newQuestionText}
                    onChange={(e) => this.setState({ newQuestionText: e.target.value })}
                    placeholder="Enter question"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Option 1</label>
                  <input
                    type="text"
                    value={newOption1}
                    onChange={(e) => this.setState({ newOption1: e.target.value })}
                    placeholder="Enter option 1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Option 2</label>
                  <input
                    type="text"
                    value={newOption2}
                    onChange={(e) => this.setState({ newOption2: e.target.value })}
                    placeholder="Enter option 2"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Option 3</label>
                  <input
                    type="text"
                    value={newOption3}
                    onChange={(e) => this.setState({ newOption3: e.target.value })}
                    placeholder="Enter option 3"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Option 4</label>
                  <input
                    type="text"
                    value={newOption4}
                    onChange={(e) => this.setState({ newOption4: e.target.value })}
                    placeholder="Enter option 4"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Correct Option</label>
                  <select
                    value={newCorrectAnswer}
                    onChange={(e) => this.setState({ newCorrectAnswer: e.target.value })}
                  >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                  Add Question
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="quiz-container">
        {quizEnd ? (
          <Score
            score={score}
            totalQuestions={questions.length}
            onReplay={this.handleReplay}
            onResetSetup={this.handleResetSetup}
          />
        ) : (
          <div>
            <div className="quiz-header">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              ></div>
            </div>
            <Question
              question={questions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={this.handleSelectAnswer}
              onSubmitAnswer={this.handleSubmitAnswer}
            />
          </div>
        )}
      </div>
    );
  }
}

export default QuizApp;
