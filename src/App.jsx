import Square from "./Square";

function App() {
  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="mt-10">
        <div className="board-row flex justify-center">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="board-row flex justify-center">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div className="board-row flex justify-center">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    </>
  );
}

export default App;
