import { TSScoreBoard } from "../../types";
import "./styles/score-board.css";

//  Where the score is presented

export function FunctionalScoreBoard({
  incorrectCount,
  correctCount,
  index,
  answersLeft,
}: TSScoreBoard) {
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
