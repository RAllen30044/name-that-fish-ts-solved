import "./styles/score-board.css";
//  Where the score is presented
import { TSFishInfo } from "../../types";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({
  gameInformation,
}: {
  gameInformation: TSFishInfo | null;
}) {
  const incorrectCount = gameInformation?.incorrectCount
    ? gameInformation.incorrectCount
    : 0;
  const correctCount = gameInformation?.correctCount
    ? gameInformation.correctCount
    : 0;

  const correctFishName = gameInformation?.correctFishName
    ? gameInformation.correctFishName
    : "";
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
