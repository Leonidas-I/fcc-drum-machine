import React, {Component} from 'react';
import {bankOne} from './bankone';
import {bankTwo} from './banktwo';
import {PadBank} from './padbank';

export class DrumMachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      power: false,
      display: 'Turn ON to use',
      volumeSlider: 0.5,
      selectPadBank: bankOne
    }
    this.powerControl = this.powerControl.bind(this);
    this.displayMonitor = this.displayMonitor.bind(this);
    this.volumeControl = this.volumeControl.bind(this);
    this.selectBank = this.selectBank.bind(this);
  }
  
  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    });
  }
  displayMonitor(x) {
    if (this.state.power) {
      this.setState({
        display: x
      });
    }
  }
  volumeControl(e) {
    if (this.state.power) {
      this.setState({
        volumeSlider: e.target.value,
        display: 'Volume: ' + Math.round(e.target.value*100) + '%'
      });
    }
  }
  selectBank() {
    if (this.state.power) {
      document.getElementById("Bank1").checked === true ? 
        this.setState({
          display: 'Bank 1 ready',
          selectPadBank: bankOne
        }) :
        this.setState({
          display: 'Bank 2 ready',  
          selectPadBank: bankTwo
        });
    }
  }
  
  render() {
    let titleStyle = {
      color: '#990000',
      textDecoration: 'underline solid #0000FF',
      fontStyle: 'italic',
      fontSize: '1.2em'
    };
    
    return (
      <div className='wrapper'>
        <div id="drum-machine" className='drum-kit'>
          <PadBank
            power={this.state.power}
            display={this.displayMonitor}
            mp3Volume={this.state.volumeSlider}
            selectPadBank={this.state.selectPadBank} />
          
          <div className='controller'>
            <label for='powerID' className='powerButton' style={titleStyle}>  {/*inline style in React JSX*/}
              <p>Power</p>
              <input type='checkbox' id='powerID' className='powerCheckbox' onClick={this.powerControl}/>
              <span className='powerUI'></span>
            </label>
            
            <div id='display'>
              {this.state.display}
            </div>
            
            <div style={titleStyle}> 
              <p>Volume</p>
              <input type='range' min='0' max='1' step='0.01' className='volume-slider' value={this.state.volumeSlider} onChange={this.volumeControl} />
            </div>
            
            <label for="Bank1" onClick={this.selectBank}>
              <input id="Bank1" type="radio" name="bank" className="bank-select-input" defaultChecked />
              <span className="bank-select-button">Bank One</span>
            </label>
            <label for="Bank2" onClick={this.selectBank}>
              <input id="Bank2" type="radio" name="bank" className="bank-select-input" />
              <span className="bank-select-button">Bank Two</span>
            </label>
          </div>
        </div>
        <footer>Code by <a href="https://github.com/Leonidas-I" target="_blank">Leonidas-I</a> aka Tri Phan</footer>
      </div>
    )
  }
};