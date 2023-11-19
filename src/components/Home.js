import { useBostonEffects, useScroll } from "@/hooks";
import React from "react";

const Home = () => {
  const { showScrollButton, scrollToTop } = useScroll();
  useBostonEffects();
  return (
    <>
      <section id="home" className="home-section">
        <div className="effect-2">
          <img src="assets/img/effect-2.svg" className="svg" alt="image" />
        </div>
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-6 py-5">
              <div className="home-intro one-page-nav">
                <div className="effect-1">
                  <img
                    src="assets/img/effect-1.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h6>
                  <span>Hello.</span>
                </h6>
                <h1>
                  Transforming <br />
                  Web Visions into
                  <br />
                  User-Friendly Realities
                </h1>
                <p>
                  I am committed to delivering web solutions that elevate users
                  online presence and connect with audience effectively.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    Let’s Discuss
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-lg-end">
                <img src="assets/img/Banner.jpg" alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        className="scrollToTop"
        style={{ display: showScrollButton ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <i
          className="bi bi-arrow-up-circle-fill"
          style={{
            color: "#292929",
          }}
        ></i>
      </button>
    </>
  );
};
export default Home;
