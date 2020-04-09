import React from "react";
import { BankSelectInput, BankSelectButton } from "./BankButton.css";

export const BankButton = (props) => {
  return (
    <label for={props.bankName} onClick={props.selectBank}>
      <BankSelectInput
        id={props.bankName}
        type="radio"
        name="bank"
      ></BankSelectInput>
      <BankSelectButton>{props.bankName}</BankSelectButton>
    </label>
  );
};
