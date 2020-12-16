import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import Discussion from "../containers/Discussion";
import Project from "../containers/Project";
import Training from "../containers/Training";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link className="nav-item" to="/home">
                Halaman Utama
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/profil">
                Profile
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/discussion">
                Discussion
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/project">
                Project
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/training">
                Training
              </Link>
            </li>
          </ul>
        </nav>
        <Route path="/home" component={Home} />
        <Route path="/profil" component={Profile} />
        <Route path="/discussion" component={Discussion} />
        <Route path="/project" component={Project} />
        <Route path="/Training" component={Training} />
      </BrowserRouter>
    </>
  );
};
export default Navbar;
