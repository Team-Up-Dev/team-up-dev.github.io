import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
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
  );
};
export default Navbar;
