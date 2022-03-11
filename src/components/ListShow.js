import React from "react";
import "./ListShow.css";

export default function ListShow(props) {
  const backgroundHandler = (e) => {
    e.target.style.background = "yellow";
  };
  const backgroundLeaveHandler = (e) => {
    e.target.style.background = "#F7F7F7";
  };
  const data = props.dataArray.map((i) => {
    return (
      <div className="data-box">
        <span
          className="data-item"
          onMouseOver={backgroundHandler}
          onMouseLeave={backgroundLeaveHandler}
        >
          {i}
        </span>
      </div>
    );
  });
  return (
    <div>
      <p>{props.heading}</p>
      <div className="balance-container">{data}</div>
    </div>
  );
}
