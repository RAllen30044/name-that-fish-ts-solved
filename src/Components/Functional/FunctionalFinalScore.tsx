import "./styles/final-score.css";
import { TSFishInfo } from "../../types";

export const FunctionalFinalScore = ({
  gameInformation,
}: {
  gameInformation: TSFishInfo | null;
}) => {
  const incorrectCount = gameInformation?.incorrectCount
    ? gameInformation.incorrectCount
    : 0;
  const correctCount = gameInformation?.correctCount
    ? gameInformation.correctCount
    : 0;
  const totalCount = correctCount + incorrectCount;

  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};
