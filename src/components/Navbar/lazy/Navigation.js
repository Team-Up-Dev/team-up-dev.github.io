import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navigate = ["Profile", "Discussion", "Project", "Training"];

export default function Navigation() {
  const location = useLocation();

  return (
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
  );
}
