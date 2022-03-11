import React, { useState } from "react";
import Details from "./Details";
import "./ShowDetails.css";

export default function ShowDetails(props) {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailHandler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="details-container">
      <div className="main-btn">
        <button className="btn-apply">Apply</button>
        <button className="btn-cancel">Cancel</button>
      </div>
      <div className="btn-container">
        {showDetails ? (
          <p className="hide-text">Hide details</p>
        ) : (
          <p className="show-text">Show Details</p>
        )}
        <button className="btn" onClick={showDetailHandler}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAM1JREFUSEvtlOENwiAQRl8nsCM4giO4iXUyHcURHMERdAPzJZA0pnAcreIP+EXCcS/f49qBRmtoxKWDf2a+q+6qv2bg74frCNwK4xfVliSegAtwBc4GXDWnUKd9clngEXgAu9AhB49Qlb6APfBMkS2w7h2C5hz8Eyrd9zWJ490c3A1V05LEObju602jXjNpbOYBL2mPffSmxVBv4lRyN7QWPE+uvStprer5oGrgtLLTu+ZzMv4Zdcfe4aqjLNzq4M1UWo26asvQZufNVL8BhbkiH/8ZzykAAAAASUVORK5CYII=" />
        </button>
      </div>
      {showDetails && <Details></Details>}
    </div>
  );
}
