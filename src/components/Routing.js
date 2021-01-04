import loadable from "@loadable/component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Navbars = loadable(() => import("./Navbar"), {
  fallback: (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "56px" }}
    />
  )
});

const Home = loadable(() => import("../containers/Home"));
const Profile = loadable(() => import("../containers/Profile"));
const Discussion = loadable(() => import("../containers/Discussion"));
const Project = loadable(() => import("../containers/Project"));
const Training = loadable(() => import("../containers/Training"));
const NotFound = loadable(() => import("../containers/NotFound"));

export default function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Discussion" component={Discussion} />
        <Route path="/training" component={Training} />
        <Route path="/project" component={Project} />
        <Route path="/Profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
