import React from "react";

function Child({ onIncrement }) {

  return (
    <div>
      <button onClick={() => onIncrement(1)}>Increase by 1</button>
      <button onClick={() => onIncrement(5)}>Increase by 5</button>
    </div>
  );

}

export default Child;