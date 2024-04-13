import { useState } from "react";
import Square from "./Square";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, Setsquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calWinner(squares)) {
      console.log(squares[i]);
      return;
    }
    const nextSquare = squares.slice();
    xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
    Setsquares(nextSquare);
    setXIsNext(!xIsNext);
    console.log(nextSquare, xIsNext);
  };

  const calWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  };
  const winner = calWinner(squares);
  let status;
  if (winner) {
    status = "Winnner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="status text-center mt-5 text-red-200 font-semibold">
        {status}
      </div>
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
