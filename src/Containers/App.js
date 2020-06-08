import React, { Component } from 'react';
import './App.css';
import Logo from '../Components/Logo'

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
    ip: null,
    mac: null,
    arch: null,
    cpus: null,
    host: null,
    platform: null
  }

  startExploit = () =>{

  }

  render(){
    return(
      <div className="App">
        <Logo/>
        <button>Start</button>
      </div>
    );
  }
}

export default App;
