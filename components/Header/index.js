import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits.js";

export const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              <img src="logo.png" alt="" />
            </a>
            <a className="dark" href="#">
              <img src="logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li className="download_cv">
                <a href="img/cv/1.jpg" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
