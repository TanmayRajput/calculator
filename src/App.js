import React, { Fragment } from "react";
import Card from "./components/Card";
import ListShow from "./components/ListShow";

import UserInput from "./components/UserInput";
import ShowDetails from "./components/ShowDetails";
import ApyComp from "./components/ApyComp";
import "./App.css";

const DATA = {
  balance: ["USE BALANCE", "$1000", "$100"],
  timeframe: ["1 Day", "7 Days", "30 Days", "1 Year", "5 Years"],
  tier: ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"],
};

const input = {
  input1: "2.10000 CAKE",
  input2: "100.0 USD",
};
const headings = {
  heading1: "Timeframe",
  heading2: "Select Tier",
};
const n = "~$20.82";
const N = "- 3 CAKE + DON";
export default function App() {
  return (
    <Fragment>
      <Card>
        <UserInput inputs={input.input1} numbers={n}></UserInput>
        <ListShow dataArray={DATA.balance}></ListShow>
        <ListShow
          dataArray={DATA.timeframe}
          heading={headings.heading1}
        ></ListShow>
        <ApyComp></ApyComp>

        <ListShow dataArray={DATA.tier} heading={headings.heading2}></ListShow>
        <UserInput inputs={input.input2} numbers={N}></UserInput>
        <ShowDetails></ShowDetails>
      </Card>
    </Fragment>
  );
}
