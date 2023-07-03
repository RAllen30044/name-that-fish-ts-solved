import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { TSFishInfo } from "../../types";

export function FunctionalApp() {
  const [gameInformation, setGameInformationName] = useState<TSFishInfo|null>(
    null
  );
  const correcFishName = gameInformation?.correctFishName ?? "";
  const incorrectCount = gameInformation?.incorrectCount ?? 0;
  const correctCount = gameInformation?.correctCount ?? 0;

  const totalCountInfo = correctCount + incorrectCount;

  return (
    <>
      {totalCountInfo < 4 ? (
        <div>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            correctFishName={correcFishName}
          />
          <FunctionalGameBoard
            getGameInformation={(gameInformation) => {
              setGameInformationName(gameInformation);
            }}
          />
        </div>
      ) : (
        <FunctionalFinalScore
          totalCount={totalCountInfo}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
