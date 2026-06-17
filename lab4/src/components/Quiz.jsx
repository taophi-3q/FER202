import { useState, useEffect, useContext } from "react";
import { quizData } from "../data/quizData";
import { QuizContext } from "../context/QuizContext";
import AddQuestion from "./AddQuestion";

function Quiz() {
  const [questions, setQuestions] = useState(quizData);
  const { selectedAnswers, setSelectedAnswers } = useContext(QuizContext);
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("Question list changed");
  }, [questions]);

  const handleSelect = (index, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [index]: answer,
    });
  };

  const checkAnswer = () => {
    let score = 0;

    questions.forEach((item, index) => {
      if (selectedAnswers[index] === item.correctAnswer) {
        score++;
      }
    });

    setResult("Correct " + score + " / " + questions.length);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setResult("");
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <span className="quiz-header__badge">Interactive Quiz</span>
        <h1 className="quiz-header__title">Quiz App</h1>
        <p className="quiz-header__subtitle">
          Answer the questions below and test your knowledge
        </p>
      </header>

      <AddQuestion questions={questions} setQuestions={setQuestions} />

      <div className="questions-list">
        {questions.map((item, index) => (
          <article key={index} className="question-card">
            <span className="question-card__number">
              Question {index + 1}
            </span>
            <h3 className="question-card__text">{item.question}</h3>

            <div className="answers-list">
              {item.answers.map((answer, i) => (
                <label
                  key={i}
                  className={
                    "answer-option" +
                    (selectedAnswers[index] === answer
                      ? " answer-option--selected"
                      : "")
                  }
                >
                  <input
                    type="radio"
                    name={"q" + index}
                    checked={selectedAnswers[index] === answer}
                    onChange={() => handleSelect(index, answer)}
                  />
                  <span className="answer-option__text">{answer}</span>
                </label>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="quiz-actions">
        <div className="quiz-actions__buttons">
          <button
            className="btn btn--primary btn--submit"
            onClick={checkAnswer}
          >
            Check Answers
          </button>

          <button
            className="btn btn--secondary btn--submit"
            onClick={handleReset}
          >
            Reset Quiz
          </button>
        </div>

        {result && (
          <div className="result-card result-card--success">
            <p className="result-card__label">Your Result</p>
            <p className="result-card__score">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
