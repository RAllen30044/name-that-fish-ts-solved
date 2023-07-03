import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { ClassAppState } from "../../types";

export class ClassApp extends Component {
  state: ClassAppState = {
    gameInformation: null,
  };

  render() {
    const { gameInformation } = this.state;
    const incorrectCount = gameInformation?.incorrectCount ?? 0;
    const correctCount = gameInformation?.correctCount ?? 0;
    const correctFishName = gameInformation?.correctFishName ?? "";
    const totalCountInfo = correctCount + incorrectCount;

    return (
      <>
        {totalCountInfo < 4 ? (
          <>
            <ClassScoreBoard
              correctFishName={correctFishName}
              incorrectCount={incorrectCount}
              correctCount={correctCount}
            />
            <ClassGameBoard
              getGameInformation={(gameInformation) => {
                this.setState({ gameInformation: gameInformation });
              }}
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCountInfo}
          />
        )}
      </>
    );
  }
}
