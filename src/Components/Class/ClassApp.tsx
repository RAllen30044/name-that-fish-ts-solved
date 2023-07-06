import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

import { initialFishes } from "../../types";

const answersLeft = initialFishes.map((fishName) => fishName.name);
export class ClassApp extends Component {
  state = {
    index: 0,
    correctCount: 0,
    incorrectCount: 0,
  };
  handleAnswer: (name: string) => void = (name: string) => {
    const { index, correctCount, incorrectCount } = this.state;
    initialFishes[index].name === name
      ? this.setState({ correctCount: correctCount + 1 })
      : this.setState({ incorrectCount: incorrectCount + 1 });
    this.setState({ index: index + 1 });
  };
  render() {
    const { index, correctCount, incorrectCount } = this.state;

    const totalCountInfo = correctCount + incorrectCount;

    return (
      <>
        {totalCountInfo < 4 ? (
          <>
            <ClassScoreBoard
              index={index}
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishData={initialFishes[index]}
              handleAnswer={this.handleAnswer}
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
