import React from "react";

const ClickTracker = ({ count, onIncrement }) => {

  return (
    <div style={{margin:"20px"}}>
      <h2>Total Clicks: {count}</h2>

      <button onClick={onIncrement}>
        Click Me
      </button>

    </div>
  );
};

export default ClickTracker;