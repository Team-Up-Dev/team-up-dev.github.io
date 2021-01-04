import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import logo from "./brand-icon.png";

const Navigate = ["Profile", "Discussion", "Project", "Training"];

const Navbars = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          alt="Team Up Dev Logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Team up
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={location.pathname}>
          {Navigate.map((navi) => {
            const to = "/" + navi.toLowerCase();

            return (
              <Nav.Link key={navi} as={Link} to={to} href={to}>
                {navi}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navbars;
