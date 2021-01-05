import { Link } from "react-router-dom";
import Brand from "react-bootstrap/NavbarBrand";
import logo from "../brand-icon.png";

export default function NavbarBrand() {
  return (
    <Brand as={Link} to="/">
      <img
        alt="Team Up Dev Logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
      Team up
    </Brand>
  );
}
