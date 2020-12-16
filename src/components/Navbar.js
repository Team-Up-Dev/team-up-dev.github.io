import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Discussion from '../containers/Discussion';
import Project from '../containers/Project';
import Training from '../containers/Training';
import './Navbar.css'


const Navbar = () => {
  return(
    <>
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link className="nav-item" to="/home">Halaman Utama</Link></li>
                <li><Link className="nav-item" to="/profil">Profile</Link> </li>
                <li><Link className="nav-item" to="/discussion">Discussion</Link></li>
                <li><Link className="nav-item" to="/project">Project</Link></li>
                <li><Link className="nav-item" to="/training">Training</Link></li>
            </ul>
        </nav>
        <Route path ='/home' component={Home}></Route>
        <Route path ='/profil' component={Profile}></Route>
        <Route path ='/discussion' component={Discussion}></Route>
        <Route path ='/project' component={Project}></Route>
        <Route path ='/Training' component={Training}></Route>
    </BrowserRouter>

    </>
  )  
}
export default Navbar;