import SectionTitle from "./SectionTitle";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import SwipeableDrawer from "./SwipeableDrawer";
import { Tooltip, OverlayTrigger, Image } from "react-bootstrap";

const portfolioData = [
  {
    id: 1,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-1.jpg",
    type: "react.JS",
  },
  {
    id: 2,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-2.jpg",
    type: "react.JS",
  },
  {
    id: 3,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-3.jpg",
    type: "next.JS",
  },
  {
    id: 4,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-4.jpg",
    type: "next.JS",
  },
  {
    id: 5,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-5.jpg",
    type: "wordPress",
  },
  {
    id: 6,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-6.jpg",
    type: "wordPress",
  },
  {
    id: 7,
    title: "Testing",
    subtitle: "sadsa",
    image: "assets/img/project-6.jpg",
    type: "wordPress",
  },
];

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const filtered = portfolioData.filter((p) => p.type === selectedTab);
    if (filtered.length > 0 && !selectedTab.includes("all")) {
      setFilteredProjects(filtered);
      return;
    }
    setFilteredProjects(portfolioData);
  }, [selectedTab]);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Project Details
    </Tooltip>
  );

  return (
    <>
      <SwipeableDrawer
        title={"Project Details"}
        open={isOpen}
        onClose={toggleDrawer}
        onSave={toggleDrawer}
        placement="end"
      >
        <div className="project-details">
          <div className="project-details__header">
            <div className="project-details__header__title">Formatic</div>
            <div className="project-details__header__subtitle">
              Making money as a Digital Artist is a dream for many artists. Read
              this article to learn the 5 actionable ways digital artists can
              make..
            </div>
          </div>
          <div className="project-details__body">
            <div className="project-details__body__title">Technologies</div>
            <div className="project-details__body__tags">
              <div className="project-details__body__tag">NEXT.JS</div>
              <div className="project-details__body__tag">REACT.JS</div>
              <div className="project-details__body__tag">WORDPRESS</div>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
      <section id="work" className="section work-section bg-gray">
        <div className="container">
          <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
          <div className="row g-4 lightbox-gallery">
            <Tabs
              activeKey={selectedTab}
              onSelect={(k) => setSelectedTab(k)}
              id="noanim-tab-example"
              className="justify-content-center gap-2"
              variant="pills"
            >
              <Tab eventKey="all" title="All" />
              <Tab eventKey="react.JS" title="ReactJS" />
              <Tab eventKey="next.JS" title="Next.JS" />
              <Tab eventKey="wordPress" title="WordPress" />
            </Tabs>
            {filteredProjects.map((portfolio) => (
              <div className="col-sm-6 col-lg-4" key={portfolio.id}>
                <div className="portfolio-box">
                  <div className="portfolio-wrap">
                    <img
                      src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619d0efd2095e3e173dfae1b_make-money-as-an-artist.svg"
                      alt="image"
                      loading="lazy"
                      className="card-thumbnail"
                    />
                    <div className="portfolio-info">
                      <div className="portfolio-links" onClick={toggleDrawer}>
                        <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <Image
                            src="assets/img/info.svg"
                            className="svg"
                            alt="info"
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </OverlayTrigger>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-img"></div>
                  <div className="portfolio-info">
                    <h3
                      style={{
                        color: "#000",
                        fontWeight: "400",
                        fontSize: "1.625rem",
                        letterSpacing: ".005px",
                        lineHeight: "1.14",
                        fontFamily: "Mabry pro, sans-serif",
                      }}
                    >
                      Five ways digital artists make money online
                    </h3>
                    <div className="card-description">
                      Making money as a Digital Artist is a dream for many
                      artists. Read this article to learn the 5 actionable ways
                      digital artists can make...
                    </div>
                    <strong>Technologies</strong>
                    <span />
                    <div role="listitem">
                      <div className="card-tags">
                        <div className="card-tag">NEXT.JS</div>
                        <div className="card-tag">REACT.JS</div>
                        <div className="card-tag">WORDPRESS</div>
                      </div>
                    </div>
                    <a href={portfolio.image} className="gallery-link">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
