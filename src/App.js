import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React / Redux Boilerplate</h3>
        <ul>
          <li>
            <code>React</code>
          </li>
          <li>
            <code>Redux</code>
          </li>
          <li>
            <code>Redux-Thunk</code>
          </li>
          <li>
            <code>react-router-dom</code>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
