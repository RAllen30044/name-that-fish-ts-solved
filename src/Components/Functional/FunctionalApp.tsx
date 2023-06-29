import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { TSFishInfo } from "../../types";

export function FunctionalApp() {
  const [gameInformation, setGameInformationName] = useState<TSFishInfo | null>(
    null
  );
  const incorrectCount = gameInformation?.incorrectCount
    ? gameInformation.incorrectCount
    : 0;
  const correctCount = gameInformation?.correctCount
    ? gameInformation.correctCount
    : 0;

    


  const totalCountInfo = correctCount + incorrectCount;

  return (
    <>
      {totalCountInfo < 4 ? (
        <div>
          <FunctionalScoreBoard gameInformation={gameInformation} />
          <FunctionalGameBoard
            getGameInformation={(gameInformation) => {
              setGameInformationName(gameInformation);
            }}
          />
        </div>
      ) : (
        <FunctionalFinalScore gameInformation={gameInformation} />
      )}
    </>
  );
}
