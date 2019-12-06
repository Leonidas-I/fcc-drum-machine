import React, {Component} from 'react';
import {DrumPad} from './drumpad';

export class PadBank extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let usePadBank;
    this.props.power ? 
      usePadBank = this.props.selectPadBank.map((currentValue, i, arrayPadBank) => {
        return (
          <DrumPad
            power={this.props.power}
            idPad={arrayPadBank[i].id}
            link={arrayPadBank[i].url}
            keyTrigger={arrayPadBank[i].keyTrigger}
            keyCode={arrayPadBank[i].keyCode}
            display={this.props.display}
            mp3Volume={this.props.mp3Volume} />
        )
      }) :
      usePadBank = this.props.selectPadBank.map((currentValue, i, arrayPadBank) => {
        return (
          <DrumPad
            power={this.props.power}
            idPad={arrayPadBank[i].id}
            link='#'
            keyTrigger={arrayPadBank[i].keyTrigger}
            keyCode={arrayPadBank[i].keyCode}
            display={this.props.display} />
        )
      });
    return (
      <div className="pad-bank">
        {usePadBank}
      </div>     
    )
  }
};