import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { portfolioData } from "../data";
import { PortfolioSection, ProjectDetails } from "../views/components";
import SectionTitle from "./SectionTitle";
import SwipeableDrawer from "./SwipeableDrawer";

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [projectDetails, setProjectDetails] = useState({});

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleProjectDetails = (project) => {
    setProjectDetails(project);
    toggleDrawer();
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
        placement="end"
      >
        <ProjectDetails project={projectDetails} />
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
              <Tab eventKey="withoutFramework" title="Static" />
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
