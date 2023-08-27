import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="main-header">
      <nav className="navbar header-nav navbar-expand-lg one-page-nav">
        <div className="container">
          <a className="navbar-brand" href="#">
            <button className="button">
              <svg
                width="50"
                height="20"
                viewBox="0 0 52.001 71.201"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="svgGroup"
                  strokeLinecap="round"
                  fillRule="evenodd"
                  fontSize="9pt"
                  stroke="#000"
                  strokeWidth="0.25mm"
                  fill="#000"
                  style={{
                    stroke: "#000",
                    strokeWidth: "0.25mm",
                    fill: "#000",
                  }}
                >
                  <path
                    d="M 0 43.4 L 0 0 L 9.5 0 L 9.5 41.9 A 39.482 39.482 0 0 0 9.9 47.711 Q 10.781 53.619 13.6 57.4 A 13.242 13.242 0 0 0 22.056 62.556 A 20.418 20.418 0 0 0 25.9 62.9 A 21.386 21.386 0 0 0 30.904 62.351 A 13.455 13.455 0 0 0 38.6 57.55 A 17.382 17.382 0 0 0 41.396 52.155 Q 42.186 49.736 42.531 46.794 A 42.042 42.042 0 0 0 42.8 41.9 L 42.8 0 L 52 0 L 52 43 A 39.957 39.957 0 0 1 51.378 50.231 A 28.663 28.663 0 0 1 48.75 58.15 Q 45.5 64.5 39.65 67.85 A 25.023 25.023 0 0 1 31.089 70.804 A 32.816 32.816 0 0 1 25.9 71.2 A 32.706 32.706 0 0 1 17.895 70.275 A 22.492 22.492 0 0 1 6.9 64 Q 0.788 57.623 0.09 46.381 A 48.096 48.096 0 0 1 0 43.4 Z"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </button>
          </a>
          <div
            className="navbar-toggler"
            onClick={(e) => {
              if (e.detail === 1) {
                setOpen(!open);
              }
            }}
          >
            <label className="burger" for="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item
              eventKey="0"
              className="navbar-collapse justify-content-end"
              {...(!open && {
                style: {
                  display: "none",
                },
              })}
            >
              <div
                style={{
                  display: "contents",
                }}
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
                <div className="d-flex justify-content-center justify-content-lg-end m-3 m-sm-0">
                  <button
                    className="cssbuttons-io-button"
                    onClick={(e) => {
                      window.location.href = "#contactus";
                    }}
                  >
                    Let's Talk
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </Accordion.Item>
          </Accordion>
        </div>
      </nav>
    </header>
  );
};
export default Header;
