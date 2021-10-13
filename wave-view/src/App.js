import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
          <span className="YC">🦄</span>Build things people want
        </div>

        <div className="bio">
          What's your next web3 startup idea ? 
        </div>

        <textarea placeholder="write your idea">

        </textarea>
        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
