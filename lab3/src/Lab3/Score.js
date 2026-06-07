import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {
    const { score, totalQuestions } = this.props;
    const text = `🏆 I scored ${score}/${totalQuestions} (${Math.round((score / totalQuestions) * 100)}%) on the Quiz App! Check it out!`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert("Result copied to clipboard! Share it with your friends! 🚀");
        })
        .catch(() => {
          alert("Could not copy automatically. Here is your result: \n\n" + text);
        });
    } else {
      alert("Here is your result to copy and share: \n\n" + text);
    }
  }

  render() {
    const { score, totalQuestions, onReplay, onResetSetup } = this.props;
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="results-container">
        <span className="trophy-icon">🏆</span>
        <h2>Quiz Completed!</h2>
        <p style={{ color: "var(--text-secondary)", margin: "0" }}>Your Score</p>
        <div className="score-display">
          {score} / {totalQuestions}
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "30px" }}>
          Accuracy: <strong>{percentage}%</strong>
        </p>

        <div className="results-actions">
          <button className="btn btn-primary" onClick={onReplay}>
            Replay Quiz
          </button>
          <button className="btn btn-success" style={{ width: "auto", margin: 0 }} onClick={this.handleShare}>
            Share Result
          </button>
          <button 
            className="btn btn-danger" 
            style={{ padding: "12px 24px", fontSize: "1rem" }} 
            onClick={onResetSetup}
          >
            Configure
          </button>
        </div>
      </div>
    );
  }
}

export default Score;
