import React from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function routes() {
  return (
    <div className="routes">
      <Router>
        <Switch>
          <Route exact path="/" render={props => <App {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}
