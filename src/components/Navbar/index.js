import Container from "react-bootstrap/Container";
import BSNavbar from "react-bootstrap/Navbar";
import loadable from "@loadable/component";

const Brand = loadable(() => import("./lazy/Brand"), {
  fallback: (
    <a className="navbar-brand" href="/" style={{ paddingLeft: "34px" }}>
      Team Up
    </a>
  )
});
const Nav = loadable(() => import("./lazy/Navigation"));

const Navbar = () => {
  return (
    <BSNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Brand />
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Nav />
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
