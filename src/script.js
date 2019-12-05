
const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

const activeStatus = {                          //so sanh 2 cach khai bao propertities trong style in-line JSX
  backgroundColor: 'orangered',
  boxShadow: '0 3px orangered',
  
}

const inactiveStatus = {                        //so sanh 2 cach khai bao propertities trong style in-line JSX
  backgroundColor: 'silver',
  boxShadow: '3px 3px 5px black',
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStatus: inactiveStatus
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activePad = this.activePad.bind(this);
    this.playMP3 = this.playMP3.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playMP3();
    }
  }
  activePad() {
    if (this.props.power) {
      this.state.padStatus.backgroundColor === 'orangered' ? 
        this.setState({
          padStatus: inactiveStatus
        }) : 
        this.setState({
          padStatus: activeStatus
        });
    }
    else {
      this.setState({
        padStatus: inactiveStatus
      });
    }
  }
  playMP3() {
    const mp3 = document.getElementById(this.props.keyTrigger);
    mp3.currentTime = 0;
    mp3.volume = this.props.mp3Volume;
    mp3.play();
    this.activePad();
    setTimeout(() => this.activePad(), 100);
    this.props.display(this.props.idPad);
  }
  render() {
    return (
      <div className="drum-pad" id={this.props.idPad} style={this.state.padStatus} onClick={this.playMP3}>
        <audio className="clip" id={this.props.keyTrigger} src={this.props.link}></audio>
        {this.props.keyTrigger}
      </div>
    )
  }
}

class PadBank extends React.Component {
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
}

class Project extends React.Component {
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
      textDecoration: 'underline dashed #0000FF',
      fontStyle: 'italic',
      fontSize: '1.2em'
    };
    
    return (
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
            <input id="Bank1" type="radio" name="bank" className="bank-select-input" />
            <span className="bank-select-button">Bank One</span>
          </label>
          <label for="Bank2" onClick={this.selectBank}>
            <input id="Bank2" type="radio" name="bank" className="bank-select-input" />
            <span className="bank-select-button">Bank Two</span>
          </label>
          
       </div>
        
      </div>
    )
  }
}

ReactDOM.render(<Project />, document.getElementById('DrumMachine'));