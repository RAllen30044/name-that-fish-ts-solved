import { Component } from "react";
import "./styles/score-board.css";
import { TSScoreBoard } from "../../types";

export class ClassScoreBoard extends Component<TSScoreBoard> {
  render() {
    const { incorrectCount, correctCount, index } = this.props;
    const { answersLeft } = this.props;

    const remainingFishAnswers = answersLeft.slice(
      answersLeft.indexOf(answersLeft[index]),
      4
    );

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {remainingFishAnswers.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
