import SectionTitle from "./SectionTitle";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import { portfolioData } from "../data";
import { PortfolioSection, ProjectDetails } from "../views/components";
import SwipeableDrawer from "./SwipeableDrawer";
import { Tooltip, OverlayTrigger, Image, Carousel } from "react-bootstrap";

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const filtered = portfolioData.filter((p) => p.type === selectedTab);
    if (filtered.length > 0 && !selectedTab.includes("all")) {
      setFilteredProjects(filtered);
      return;
    }
    setFilteredProjects(portfolioData);
  }, [selectedTab]);

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
            <strong>Project Name</strong>
          </div>
          <Carousel>
            <Carousel.Item>
              <Image
                src="https://lh3.googleusercontent.com/-JznXjXD6KdM/Y7dC4iLs1YI/AAAAAAAAAQw/xwrNWkaiXCUYPjmcSevloO9rfo69jUYoACO8EGAYYCw/s640-w640-h400/home%2Bpage.png"
                alt="image"
                style={{ width: "inherit", height: 300, borderRadius: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://i.ytimg.com/vi/UDKajZYuzYQ/maxresdefault.jpg"
                alt="image"
                style={{ width: "inherit", height: 300, borderRadius: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/UDKajZYuzYQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Carousel.Item>
          </Carousel>
          <div className="project-details__discription">
            <p>
              Making money as a Digital Artist is a dream for many artists. Read
              this article to learn the 5 actionable ways digital artists can
              make...
            </p>
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
              <Tab eventKey="MERN" title="MERN" />
              <Tab eventKey="wordPress" title="WordPress" />
              <Tab eventKey="withoutFramework" title="Without Framework" />
            </Tabs>
            {filteredProjects.map((portfolio) => (
              <PortfolioSection
                key={portfolio.id}
                portfolio={portfolio}
                handleProjectDetails={handleProjectDetails}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
