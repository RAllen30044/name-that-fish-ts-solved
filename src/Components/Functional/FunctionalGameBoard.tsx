import "./styles/game-board.css";

import { TSGameInfo } from "../../types";
import { useState, ChangeEvent, FormEvent } from "react";

export function FunctionalGameBoard({ handleAnswer, fishData }: TSGameInfo) {
  const [inputFishAnswer, setInputFishAnswer] = useState("");

  const handlleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer(inputFishAnswer.toLowerCase());
    setInputFishAnswer("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFishAnswer(e.target.value);
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handlleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={inputFishAnswer}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
