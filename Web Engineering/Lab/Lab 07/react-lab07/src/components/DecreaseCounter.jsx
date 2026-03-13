import React from "react";

const DecreaseCounter = ({ onDecrease }) => {

  return (
    <button onClick={onDecrease}>
      Decrease Count
    </button>
  );

};

export default DecreaseCounter;