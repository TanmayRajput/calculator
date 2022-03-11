import React from "react";

import "./UserInput.css";

export default function UserInput(props) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input className="input-text" type="text" value={props.inputs}></input>
      </div>
      <div className="sub-text">
        <h4 className="dollar-value">{props.numbers}</h4>
      </div>
    </div>
  );
}
