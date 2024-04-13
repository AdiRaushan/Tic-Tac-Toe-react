import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => setValue("B")}>
      {value}
    </button>
  );
};

export default Square;
