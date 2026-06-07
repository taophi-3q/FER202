import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score, onReplay } = this.props;

    return (
      <div>
        <h2>Quiz Ended</h2>
        <p>Your Score: {score}</p>
        <button onClick={onReplay}>Replay</button>
      </div>
    );
  }
}

export default Score;
