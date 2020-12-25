import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import logo from "./brand-icon.png";
const Navbars = () => {
  return (
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
