import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import SozDefteri from "./SozDefteri";
import History from "./History";
import Gallery from "./Gallery";
import Wishes from "./Wishes";
import Advice from "./Advice";

export default function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={SozDefteri} />
        <Route path="/history" component={History} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/wishes" component={Wishes} />
        <Route path="/advice" component={Advice} />
      </Switch>
    </Router>
  );
}
