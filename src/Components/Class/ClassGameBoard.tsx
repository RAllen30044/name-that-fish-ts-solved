import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { TSGameInfo } from "../../types";

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

export class ClassGameBoard extends Component<TSGameInfo> {
  state = {
    inputFishName: "",
    correctFishName: "",
    index: 0,
    correctCount: 0,
    incorrectCount: 0,
  };
  render() {
    const {
      inputFishName,
      correctFishName,
      correctCount,
      index,
      incorrectCount,
    } = this.state;

    const { getGameInformation } = this.props;
    const nextFishToName = initialFishes[index];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ index: index + 1 });
            getGameInformation({
              fishName: inputFishName,
              correctCount: correctCount,
              incorrectCount: incorrectCount,
              correctFishName: correctFishName,
            });

            this.setState({ inputFishName: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={inputFishName}
            onChange={(e) => {
              this.setState({ inputFishName: e.target.value.toLocaleLowerCase() });
              this.setState({ correctFishName: nextFishToName.name });
            }}
          />
          <input
            type="submit"
            onClick={() => {
              inputFishName.toLowerCase() === correctFishName
                ? this.setState({ correctCount: correctCount + 1 })
                : this.setState({ incorrectCount: incorrectCount + 1 });
            }}
          />
        </form>
      </div>
    );
  }
}
