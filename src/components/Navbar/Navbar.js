import {Link} from 'react-router-dom';
import logo from './brand-icon.png'
import './Navbar.css'


const Navbar = () => {
  return(
    <>
        <nav>
            <ul>
                <li><img alt="logo"src={logo} width ="60" height ="60" /></li>
                <li><h1 className="nav-item">Team Up</h1></li>
                <li><Link className="nav-item" to="/">Halaman Utama</Link></li>
                <li><Link className="nav-item" to="/profil">Profile</Link> </li>
                <li><Link className="nav-item" to="/discussion">Discussion</Link></li>
                <li><Link className="nav-item" to="/project">Project</Link></li>
                <li><Link className="nav-item" to="/training">Training</Link></li>
            </ul>
        </nav>

    </>
  )  
}
export default Navbar;

