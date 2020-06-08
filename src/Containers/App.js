import React, { Component } from 'react';
import './App.css';
import Logo from '../Components/Logo'
import Generator from '../Components/Generator/Generator';

const OS = require('os');


class App extends Component{


  //For reference
  
  /* 
  Arch is architecture (ex. arm, x32 etc.)
  host is the hostname of the operating system
  ip, mac are found from os.networtInterfaces() object
  platform is the operating system (ex. linux, win32 etc.)
   */
  state = {
    show: false,
    btn: 'start'
  }

  exploitInformation = (e) => {
    this.setState({show: true});
    let network = OS.networkInterfaces();
    if (network == null) network = "Not Available";
    const platform = OS.platform();
    const host = OS.hostname();
    console.log(OS.platform());
    return (
      <p>ip</p>
    );
  }

  render(){
    return(
      <div className="App">
        <Logo/>
        <button onClick={() => !this.state.show ? this.setState({show: true, btn: 'End'}) : this.setState({show:false, btn: 'Start'})}>{this.state.btn}</button>
        {this.state.show ? <Generator/> : null}
      </div>
    );
  }
}

export default App;
