import React, { useState } from "react";

import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Counter from "./components/Counter";
import ClickTracker from "./components/ClickTracker";

import Child from "./components/Child";
import ResetCounter from "./components/ResetCounter";
import DecreaseCounter from "./components/DecreaseCounter";

function App() {

  const [count, setCount] = useState(0);

  // increase with parameter
  const increaseCount = (value) => {
    setCount(count + value);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (

    <div style={{textAlign:"center"}}>

      <h1>React Props, State & Callbacks Lab</h1>

      <hr/>

      <h2>Part A — Props</h2>

      <Student name="Talha Naveed" course="Computer Science" />
      <Student name="Arham Jan" course="Mathematics" />

      <Teacher name="Engr. Subas Bilal" subject="Web Engineering" />
      <Teacher name="Engr. Saad Mazhar" subject="Artificial Intelligence" />

      <hr/>

      <h2>Part B — State Counter</h2>

      <Counter />

      <ClickTracker />

      <hr/>

      <h2>Part C & E — Parent Child Communication</h2>

      <h2>Parent Count: {count}</h2>

      <Child onIncrement={increaseCount} />

      <br/><br/>

      <DecreaseCounter onDecrease={decreaseCount} />

      <br/><br/>

      <ResetCounter onReset={resetCount} />

    </div>

  );
}

export default App;