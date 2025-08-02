import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import SozDefteri from "./SozDefteri";

export default function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={SozDefteri} />
        {/* Можеш да добавиш още Route-и тук за други страници */}
      </Switch>
    </Router>
  );
}

