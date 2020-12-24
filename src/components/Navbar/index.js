import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import logo from "./brand-icon.png";
import "./Navbar.css";

const Navbars = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <img alt="logo" src={logo} width="60" height="60" />
    //     </li>
    //     <li>
    //       <h1 className="nav-item">Team Up</h1>
    //     </li>
    //     <li>
    //       <Link className="nav-item" to="/">
    //         Halaman Utama
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="nav-item" to="/profil">
    //         Profile
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="nav-item" to="/discussion">
    //         Discussion
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="nav-item" to="/project">
    //         Project
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="nav-item" to="/training">
    //         Training
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Team up
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            HomePage
          </Nav.Link>
          <Nav.Link as={Link} to="/profil">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/discussion">
            Discussion
          </Nav.Link>
          <Nav.Link as={Link} to="/project">
            Project
          </Nav.Link>
          <Nav.Link as={Link} to="/training">
            Training
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navbars;
