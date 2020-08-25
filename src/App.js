import React from 'react';
import logo from './abstract.gif';
import odImage from './object-detection.jpg';
import challengeImg from './alien.png';
import './App.css';
import Block from "./components/Block";



function App() {
  return (
    <div className="App">
        <img src={logo} className="img-app"/>
        <div className="main"></div>
        <div className="header">
            <h1 className="header-app">ARTIFICIAL INTELLIGENCE AND <span>MACHINE LEARNING</span> FOR WELL DATA PROCESSING AND LITHOFACIES PREDICTION</h1>
            <h2 className="header-info">The SoftServe Energy team created a tool to empower users to automate geophysical well log data processing and lithofacies prediction by using machine learning modeling and features engineering. Additionally, the prototype will evolve into a comprehensive solution that enables well correlation, and well-to-seismic tie with the ability to predict hydrocarbon location</h2>
        </div>
      {/*<Block content={{'id': 1, 'text': 'vbnmkhghjk'}}/>*/}

      <div className="challenge">
          <h1 className="header-app">AI-Powered predictions</h1>
          <img src={odImage} className="simple-img"/>
          <h1 className="header-app margin-top">CHALLENGES WE SOLVE</h1>
          <div className="challenge-block">
              <img src={challengeImg} className="small-img"/>
              <h2 className="header-info challenge-info">Reduce time for conditioning and interpretation of geophysical well data from weeks to minutes for a single bore hole.</h2>
          </div>
          <div className="challenge-block">
              <img src={challengeImg} className="small-img small-img-right"/>
              <h2 className="header-info challenge-info challenge-info-right">Reduce time for conditioning and interpretation of geophysical well data from weeks to minutes for a single bore hole.</h2>
          </div>
          <div className="challenge-block">
              <img src={challengeImg} className="small-img"/>
              <h2 className="header-info challenge-info">Reduce time for conditioning and interpretation of geophysical well data from weeks to minutes for a single bore hole.</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
