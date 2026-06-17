import { useState } from "react";

function AddQuestion({ questions, setQuestions }) {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAdd = () => {
    const newQuestion = {
      question,
      answers: [answer1, answer2, answer3],
      correctAnswer,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setCorrectAnswer("");
  };

  return (
    <section className="add-question">
      <div className="add-question__header">
        <div className="add-question__icon">+</div>
        <div>
          <h2 className="add-question__title">Add New Question</h2>
          <p className="add-question__desc">
            Create a custom question for the quiz
          </p>
        </div>
      </div>

      <div className="add-question__form">
        <div className="form-group">
          <label htmlFor="question-input">Question</label>
          <input
            id="question-input"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <div className="answers-grid">
          <div className="form-group">
            <label htmlFor="answer1">Answer 1</label>
            <input
              id="answer1"
              placeholder="Option A"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer2">Answer 2</label>
            <input
              id="answer2"
              placeholder="Option B"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer3">Answer 3</label>
            <input
              id="answer3"
              placeholder="Option C"
              value={answer3}
              onChange={(e) => setAnswer3(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="correct-answer">Correct Answer</label>
          <input
            id="correct-answer"
            placeholder="Must match one of the options above"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>

        <button className="btn btn--primary" onClick={handleAdd}>
          Add Question
        </button>
      </div>
    </section>
  );
}

export default AddQuestion;
