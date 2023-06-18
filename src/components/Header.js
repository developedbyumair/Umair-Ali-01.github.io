import { Accordion } from "react-bootstrap";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar header-nav navbar-expand-lg one-page-nav">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            <img src="assets/img/logo.svg" className="svg" alt="image" />
          </a>
          {/* / */}
          <Accordion>
            {/* Mobile Toggle */}
            <Accordion.Toggle
              eventKey={"toggle"}
              as={"button"}
              className="navbar-toggler"
            >
              <span />
              <span />
              <span />
            </Accordion.Toggle>
            {/* / */}
            {/* Top Menu */}
            <Accordion.Collapse
              eventKey={"toggle"}
              className="navbar-collapse justify-content-end"
            >
              <ul className="navbar-nav mx-auto">
                <li>
                  <a className="nav-link active" href="#home">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services">
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#skill">
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contactus">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </Accordion.Collapse>
          </Accordion>
          {/* / */}
          {/* Top Menu */}
          <div className="ms-auto d-none d-lg-block">
            <a className="px-btn px-btn-theme2" href="#contactus">
              Contact Now
            </a>
          </div>
          {/* / */}
        </div>
        {/* Container */}
      </nav>{" "}
      {/* Navbar */}
    </header>
  );
};
export default Header;
