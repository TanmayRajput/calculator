import React from "react";
import "./ApyComp.css";
export default function ApyComp() {
  return (
    <div className="apy-container">
      <p className="apy-text">Enable Accelerated APY</p>
      <div className="btn-slider">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
}
