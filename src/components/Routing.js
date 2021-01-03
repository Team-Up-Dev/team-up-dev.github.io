import Navbars from "./Navbar";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Discussion from "../containers/Discussion";
import Project from "../containers/Project";
import Training from "../containers/Training";
import NotFound from "../containers/NotFound";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Discussion">
          <Discussion />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/training" component={Training} />

        <Route exact path="/">
          <Home />
        </Route>

        <Route >
          <NotFound />
        </Route>

      </Switch>
    </Router >
  );
}