import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return (
    <div className={classes}>
      <div className="header">
        <h1 className="main-heading">ROI Calculator</h1>
        <img src="assets/cancel-btn.png" alt="images"></img>
      </div>
      <div className="container">
        <img src="assets/cakeLogo.jpg" alt="images" className="logo-img"></img>
        <h4 className="logo-name">Cake</h4>
        <div className="btn-slider">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <h4 className="USD-name">USD</h4>
        </div>
      </div>

      {props.children}
    </div>
  );
};

export default Card;
