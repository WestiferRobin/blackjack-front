import './Splash.css';
import {RenderView} from "./views/RenderView"
import React from 'react';

export default class Splash extends React.Component {

  // NOTE: Place this back to 'splash' once debug is done
  state = {flag: "splash"};

  constructor(props) {
    super(props);
    this.setFlag = this.setFlag.bind(this);
  }

  setFlag(flag) {
    this.setState({flag: flag});
  }

  render() {
    return (
      <div >
        <header style={{backgroundColor:"black", color:"white", fontSize: "50px"}}>
          <ul>
            <li><button onClick={() => this.setFlag("solo")}>Solo</button></li>
            <li><button onClick={() => this.setFlag("training")}>Training</button></li>
            <li><button onClick={() => this.setFlag("simulation")}>Simulation</button></li>
            <li><button onClick={() => this.setFlag("options")}>Options</button></li>
          </ul>
        </header>
        <RenderView renderFlag = {this.state.flag} />
      </div>
    );
  }
}