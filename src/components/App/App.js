import React, { Component } from "react";
import { Author } from "../Author/Author";
import { BankButton } from "../BankButton/BankButton";
import { PadBank } from "../PadBank/PadBank";
import { Power } from "../Power/Power";
import { bankZero } from "../Sound/initialBank";
import { Volume } from "../Volume/Volume";
import { Wrapper } from "./App.css";
import { DrumMachine, Controller } from "../Others/Container.css";
import { Display } from "../Others/Display.css";
import { GlobalStyle } from "../Others/GlobalStyle.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      display: "Switch ON to activate",
      volumeSlider: 0.5,
      selectPadBank: bankZero,
    };
    this.powerControl = this.powerControl.bind(this);
    this.displayMonitor = this.displayMonitor.bind(this);
    this.volumeControl = this.volumeControl.bind(this);
    this.selectBank = this.selectBank.bind(this);
  }

  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160),
    });
  }
  displayMonitor(x) {
    if (this.state.power) {
      this.setState({
        display: x,
      });
    }
  }
  volumeControl(e) {
    if (this.state.power) {
      this.setState({
        volumeSlider: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100) + "%",
      });
    }
  }
  async selectBank() {
    let padbankLoad = await import(
      /* webpackChunkName: "padbankLoad" */ "../Sound/Sound"
    );
    if (this.state.power) {
      document.getElementById("Bank-1").checked === true
        ? this.setState({
            display: "Bank-1 ready",
            selectPadBank: padbankLoad.bankOne,
          })
        : this.setState({
            display: "Bank-2 ready",
            selectPadBank: padbankLoad.bankTwo,
          });
    }
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <DrumMachine>
          <PadBank
            power={this.state.power}
            display={this.displayMonitor}
            mp3Volume={this.state.volumeSlider}
            selectPadBank={this.state.selectPadBank}
          />
          <Controller>
            <Power powerControl={this.powerControl} />
            <Display>{this.state.display}</Display>
            <Volume
              volumeSlider={this.state.volumeSlider}
              volumeControl={this.volumeControl}
            />
            <BankButton bankName={"Bank-1"} selectBank={this.selectBank} />
            <BankButton bankName={"Bank-2"} selectBank={this.selectBank} />
          </Controller>
        </DrumMachine>
        <Author></Author>
      </Wrapper>
    );
  }
}
