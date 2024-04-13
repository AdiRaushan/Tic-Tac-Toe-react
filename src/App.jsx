import { useState } from "react";
import Square from "./Square";

function App() {
  const [square, Setsquare] = useState(Array(9).fill(null));
  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="mt-10">
        <div className="board-row flex justify-center">
          <Square value={square[0]} />
          <Square value={square[1]} />
          <Square value={square[2]} />
        </div>
        <div className="board-row flex justify-center">
          <Square value={square[3]} />
          <Square value={square[4]} />
          <Square value={square[5]} />
        </div>
        <div className="board-row flex justify-center">
          <Square value={square[6]} />
          <Square value={square[7]} />
          <Square value={square[8]} />
        </div>
      </div>
    </>
  );
}

export default App;
