import Navbars from "./Navbar";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Discussion from "../containers/Discussion";
import Project from "../containers/Project";
import Training from "../containers/Training";
import NotFound from "../containers/NotFound";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route path="/Profile" component={Profile} />
        <Route path="/Discussion" component={Discussion} />
        <Route path="/project" component={Project} />
        <Route path="/training" component={Training} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
