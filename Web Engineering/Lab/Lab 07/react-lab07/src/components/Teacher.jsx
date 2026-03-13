import React from "react";

const Teacher = (props) => {
  return (
    <div style={{border:"1px solid blue", padding:"10px", margin:"10px"}}>
      <h2>Teacher: {props.name}</h2>
      <h3>Subject: {props.subject}</h3>
    </div>
  );
};

export default Teacher;