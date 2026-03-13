import React from "react";

const ResetCounter = ({ onReset }) => {

  return (
    <button onClick={onReset}>
      Reset Counter
    </button>
  );

};

export default ResetCounter;