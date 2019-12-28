// dependencies
import React from "react";

// files
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
            <code>Redux-Logger</code>
          </li>
          <li>
            <code>React-Router-Dom</code>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
