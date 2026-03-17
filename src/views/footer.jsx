import logo from "../assets/images/accoric-logo-new.png";
import arrowImage from "../assets/images/arrow.svg";
import logoFacebook from "../assets/images/logo-facebook.svg";
import logoLinkedin from "../assets/images/logo-linkedin.svg";
import logoInstagram from "../assets/images/logo-instagram.svg";
import footerText from "../assets/images/footer-text.svg";

function Footer() {
  return (
    <>
      <footer class="main-footer">
        <div class="container gradient-container">
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <div class="gradient-box1"></div>
              <div class="gradient-box2"></div>

              <h2 class="">Compliance Shouldn’t Depend on Best Effort</h2>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="btns-wrp pull-right">
                <a href="#" class="btn btn-outline-primary">
                  <span>
                    Request a conversation{" "}
                    <img src={arrowImage} alt="arrow"></img>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="fmenu-container">
          <div class="row b-footer">
            <div class="col-md-4 b-col first">
              <div>
                <a href="#">
                  <img src={logo} alt="Accoric Management" />
                </a>
                <div class="s-content">
                  Accoric is a leading provider of innovative solutions for
                  safety and compliance.
                </div>
                <div class="s-icons">
                  <a href="#">
                    <img src={logoLinkedin} alt="linkedin"></img>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61577145156368">
                    <img src={logoFacebook} alt="facebook"></img>
                  </a>
                  <a href="https://www.instagram.com/accoric.co/">
                    <img src={logoInstagram} alt="instagram"></img>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-2 b-col">
              <h3 class="fmenu-heading">quick links</h3>
              <ul class="fmenu">
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a  href="/accoric-management">
                    Accoric Management
                  </a>
                </li>
                <li>
                  <a href="/about-us">About us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 b-col">
              <h3 class="fmenu-heading">Company</h3>
              <ul class="fmenu">
                {/* <li>
                  <a asp-controller="Blog" asp-action="Index">
                    Blogs
                  </a>
                </li> */}
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                
              </ul>
            </div>
            <div class="col-md-4 b-col">
              <h3 class="fmenu-heading">contact</h3>
              <p>Call us</p>
              <p>+1 516-200-4720</p>
              <p>Email us</p>
              <p>
                <a href="mailto:sales@accoric.com">
                  <strong>sales@accoric.com</strong>
                </a>
              </p>
              <p>Location</p>
              <p>110 Walt Whitman Rd STE 203, Huntington Sta., NY 11746</p>
            </div>
          </div>
        </div>

        <div class="container copyright-container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <p>Copyright &copy; 2026 RORI Technologies dba Accoric, All Rights Reserved</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="terms-wrap">
                <p>
                  <a asp-controller="Home" asp-action="PrivacyPolicy">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
              <img
                src={footerText}
                alt="Accoric Management"
                class="footer-brainy-txt"
              ></img>
            </div>
          </div>
        </div>
      </footer>

      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <a href="#top-ofthe-page" class="jumper j1" id="moveup">
              <img src="~/images/backtotop-arrw.svg" alt="back to top"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
