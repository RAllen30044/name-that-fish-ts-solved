import { TSScoreBoard } from "../../types";
import "./styles/score-board.css";
//  Where the score is presented

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
  correctFishName,
}: TSScoreBoard) {
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
