import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/images/accoric-logo-new.png";
import arrowImage from "../assets/images/arrow.svg";

function Header() {

 useEffect(() => {
    const header = document.querySelector(".main-header");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        header.classList.remove("half-sticky");
      } else if (currentScrollY > lastScrollY) {
        header.classList.remove("half-sticky");
        header.style.transform = "translateY(-100%)";
      } else if (currentScrollY < lastScrollY) {
        header.classList.add("half-sticky");
        header.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="main-header mb-5">
        <section className="top-main-header-section">
          <nav className="navbar navbar-expand-md">
            <div className="container contnr2 top-main-header-container">
              <a href="/" className="navbar-brand">
                <img
                  className="brainy-logo"
                  src={logo}
                  alt="Accoric Management"
                />
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav col-12 col-md-auto justify-content-center">
                  <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="/accoric-management" className="nav-link">Accoric Management</a>
                  </li>
                 {/* 
                    <li className="nav-item">
                       <a href="/support" className="nav-link">Support</a>
                    </li> 
                 */}
                  <li className="nav-item">
                    <a href="/about-us" className="nav-link">About Us</a>
                  </li>
                </ul>
              </div>
              <div className="tab-hidden">
                <a href="https://accoricmgt.com/">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </a>
                <a href="/contact">
                  <button type="button" className="btn btn-secondary">
                    Book a Call <img src={arrowImage} alt="arrow" />
                  </button>
                </a>
              </div>
            </div>
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
