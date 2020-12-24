import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbars from "./Navbar";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Discussion from "../containers/Discussion";
import Project from "../containers/Project";
import Training from "../containers/Training";
import NotFound from "../containers/NotFound";

const Routing = () => {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profil" component={Profile} />
        <Route path="/discussion" component={Discussion} />
        <Route path="/project" component={Project} />
        <Route path="/training" component={Training} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default Routing;
