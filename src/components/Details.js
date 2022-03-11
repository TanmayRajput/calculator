import React from "react";
import "./Details.css";

export default function detals() {
  return (
    <div className="details-container">
      <div className="details-top">
        <span className="top-text">APY</span>
        <span className="top-number"> 63.10%</span>
      </div>
      <div className="description">
        <ul>
          <li>calculated basedd on current rates</li>
          <li>
            All figures are estimates provided for your convinience only, and by
            no means represent guaranted results.
          </li>
        </ul>
      </div>
    </div>
  );
}
