import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../types";

export function FunctionalApp() {
  const answersLeft = initialFishes.map((fishName) => fishName.name);

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [index, setIndex] = useState(0);
  const handleAnswer: (name: string) => void = (name: string) => {
    initialFishes[index].name === name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
    setIndex(index + 1);
  };

  const totalCountInfo = correctCount + incorrectCount;

  return (
    <>
      {totalCountInfo < 4 ? (
        <div>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
            index={index}
          />
          <FunctionalGameBoard
            fishData={initialFishes[index]}
            handleAnswer={handleAnswer}
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
