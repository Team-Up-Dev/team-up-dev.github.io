import "./Footer.css";
import logoTeamUp from "./brand-icon.png";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Teamup</h3>
        <span>
          <img alt="companyLogo" src={logoTeamUp} width="60" height="60" />
        </span>

        <p className="footer-company-name">TeamUp &copy; 2020</p>

        {/* <div className="footer-icons">
          <a href="https://discord.gg/y6rWpzCuwH">
            <i className="fa fa-discord"></i>
          </a>
           <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a> 
            Yang ini dikomen dulu, kalo emang ga kepake apus aja
          
          <a href="https://github.com/Team-Up-Dev">
            <i className="fa fa-github"></i>
          </a>
        </div>  */}
      </div>
    </footer>
  );
};
export default Footer;
