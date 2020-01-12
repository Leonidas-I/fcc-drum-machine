import React, {Component} from 'react';

const activeStatus = {
  backgroundColor: 'orangered',
  boxShadow: '0 3px orangered',
  
};

const inactiveStatus = {
  backgroundColor: 'silver',
  boxShadow: '3px 3px 5px black',
};

export class DrumPad extends Component {
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
        <audio className="clip" id={this.props.keyTrigger} src={this.props.link} rel='preload'></audio>
        {this.props.keyTrigger}
      </div>
    )
  }
}