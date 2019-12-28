import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React / Redux Boilerplate</p>
        <ul>
          <li>
            <code>React</code>
          </li>
          <li>
            <code>Redux</code>
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
