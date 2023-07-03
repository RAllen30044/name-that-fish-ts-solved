import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { TSFishInfo } from "../../types";
import { useState } from "react";
const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard({
  getGameInformation,
}: {
  getGameInformation: (fishName: TSFishInfo) => void;
}) {
  const [index, setIndex] = useState(0);
  const nextFishToName = initialFishes[index];
  const [inputFishName, setInputFishName] = useState("");
  const [correctFishName, setCorrectFishName] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setIndex(index + 1);

          getGameInformation({
            fishName: inputFishName,

            correctCount: correctCount,
            incorrectCount: incorrectCount,
            correctFishName: correctFishName,
          });
          setInputFishName("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={inputFishName}
          onChange={(e) => {
            setInputFishName(e.target.value);
            setCorrectFishName(nextFishToName.name);
          }}
        />
        <input
          type="submit"
          onClick={() => {
            inputFishName.toLowerCase() === correctFishName
              ? setCorrectCount(correctCount + 1)
              : setIncorrectCount(incorrectCount + 1);
          }}
        />
      </form>
    </div>
  );
}
