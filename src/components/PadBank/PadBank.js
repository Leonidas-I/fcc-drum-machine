import React, { Component } from "react";
import { PadBankStyle } from "./PadBank.css";
import { DrumPad } from "../DrumPad/DrumPad";

export const PadBank = (props) => {
  let usePadBank;
  props.power
    ? (usePadBank = props.selectPadBank.map((currentValue, i, arrayBank) => {
        return (
          <DrumPad
            power={props.power}
            idPad={arrayBank[i].id}
            link={arrayBank[i].url}
            keyTrigger={arrayBank[i].keyTrigger}
            keyCode={arrayBank[i].keyCode}
            display={props.display}
            mp3Volume={props.mp3Volume}
          />
        );
      }))
    : (usePadBank = props.selectPadBank.map((currentValue, i, arrayBank) => {
        return (
          <DrumPad
            power={props.power}
            idPad={arrayBank[i].id}
            link="#"
            keyTrigger={arrayBank[i].keyTrigger}
            keyCode={arrayBank[i].keyCode}
            display={props.display}
          />
        );
      }));
  return <PadBankStyle>{usePadBank}</PadBankStyle>;
};
