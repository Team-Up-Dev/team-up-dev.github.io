import Brand from "react-bootstrap/NavbarBrand";
import logo from "../brand-icon.png";

export default function NavbarBrand() {
  return (
    <Brand href="/">
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
