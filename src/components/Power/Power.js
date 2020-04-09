import React from "react";
import { PowerLabel, PowerInput, PowerUI } from "./Power.css";
import { Title } from "../Volume/Volume.css";

export const Power = (props) => {
  return (
    <PowerLabel for="powerID">
      <Title>Power</Title>
      <PowerInput type="checkbox" id="powerID" onClick={props.powerControl} />
      <PowerUI></PowerUI>
    </PowerLabel>
  );
};
