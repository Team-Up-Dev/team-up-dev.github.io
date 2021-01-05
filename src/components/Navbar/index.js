import BSNavbar from "react-bootstrap/Navbar";
import loadable from "@loadable/component";

const Brand = loadable(() => import("./lazy/Brand"), {
  fallback: (
    <a className="navbar-brand" href="/" style={{ paddingLeft: "30px" }}>
      Team Up
    </a>
  )
});
const Nav = loadable(() => import("./lazy/Navigation"));

const Navbar = () => {
  return (
    <BSNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Brand />
      <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BSNavbar.Collapse id="responsive-navbar-nav">
        <Nav />
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};
export default Navbar;
