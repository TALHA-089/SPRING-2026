import React from "react";

const Student = (props) => {
  return (
    <div style={{border:"1px solid gray", padding:"10px", margin:"10px"}}>
      <h2>Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>
    </div>
  );
};

export default Student;