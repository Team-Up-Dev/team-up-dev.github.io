import "./Footer.css";
import logoTeamUp from "./brand-icon.png";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>Teamup</h3>
          <span>
            <img alt="companyLogo" src={logoTeamUp} width="60" height="60" />
          </span>

          <p class="footer-company-name">TeamUp © 2020</p>

          {/*ga ngerti cemana buat anchor tag untuk nge direct ke github/discord/tele  jadi ya di comment dulu lah*/}

          {/* <div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div> */}
        </div>
      </footer>
    </>
  );
};
export default Footer;
