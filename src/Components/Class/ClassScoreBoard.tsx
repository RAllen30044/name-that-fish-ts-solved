import { Component } from "react";
import "./styles/score-board.css";
import { TSScoreBoard } from "../../types";

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component<TSScoreBoard> {
  render() {
    const { incorrectCount, correctCount, correctFishName } = this.props;

    const removeAnswer = correctFishName
      ? answersLeft.indexOf(correctFishName) + 1
      : 0;

    const remainingFishAnswers = answersLeft.slice(removeAnswer, 4);

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
