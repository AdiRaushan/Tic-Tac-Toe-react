import { useState } from "react";
import App from "./App";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history.lenght - 1;
  const handlePlay = () => {
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <div className="game flex justify-center">
        <div className="Game-board">
          <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
      </div>
    </>
  );
};

export default Game;
