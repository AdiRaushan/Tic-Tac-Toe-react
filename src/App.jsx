import { useState } from "react";
import Square from "./Square";

function App() {
  const [squares, Setsquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquare = squares.slice();
    nextSquare[i] = "X";
    Setsquares(nextSquare);
    console.log(nextSquare);
  };
  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="mt-10">
        <div className="board-row flex justify-center">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row flex justify-center">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row flex justify-center">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default App;
