import SectionTitle from "./SectionTitle";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import SwipeableDrawer from "./SwipeableDrawer";
import { Tooltip, OverlayTrigger, Image, Carousel } from "react-bootstrap";

const portfolioData = [
  {
    id: 1,
    title: "V-tech",
    subtitle:
      "International Real Estate Platform which connects buyers and sellers globally.... ",
    discription: "",
    techStack: ["REACT.JS", "MUI-V5", "REDUX", "GOOGLE MAPS SDK"],
    type: "react.JS",
  },
  {
    id: 2,
    title: "Ventiswap",
    subtitle: "Cryptocurrency Exchange & Digital Wallet.... ",
    discription: "",
    techStack: [
      "REACT.JS",
      "MUI-V5",
      "REDUX",
      "BINANCE SDK",
      "WALLET INTEGRATION",
    ],
    type: "react.JS",
  },
  {
    id: 3,
    title: "Yoor",
    subtitle: "NFT Marketplace for Global Artists & Creators.... ",
    discription: "",
    techStack: ["NEXT.JS", "BOOTSTRAP", "MORALIS SDK", "NFT INTEGRATION"],
    type: "react.JS",
  },
  {
    id: 4,
    title: "Fomatic",
    subtitle: "Dynamic Task Management & Workflow Tool for Teams.... ",
    discription: "",
    techStack: [
      "NEXT.JS",
      "GOOGLE WORKSPACE",
      "GOOGLE ADD-ONS",
      "BOARD INTEGRATION",
    ],
    type: "react.JS",
  },
  {
    id: 5,
    title: "Wilwinhk",
    subtitle:
      "Comprehensive E-Commerce Solution To Provide A Seamless Shopping Experience.... ",
    discription: "",
    techStack: ["REACT.JS", "STRIPE SDK", "EXPRESS.JS", "MONGODB"],
    type: "MERN",
  },
  {
    id: 6,
    title: "Evanglium",
    subtitle:
      "Multi-Platform NFT Display & Wallet Integration Platform To Showcase NFTs & Digital Art.... ",
    discription: "",
    techStack: ["NEXT.JS", "MUI-V5", "MORALIS SDK", "ETHER.JS"],
    type: "react.JS",
  },
  {
    id: 7,
    title: "SmartNet",
    subtitle: "Communication & Contact Sharing Platform for Businesses.... ",
    discription: "",
    techStack: ["REACT.JS", "SEMANTIC UI", "TWILIO SDK"],
    type: "MERN",
  },
  {
    id: 9,
    title: "Alnoor Mart",
    subtitle: "Online Shopping Experience for Customers & Vendors.... ",
    discription: "",
    techStack: ["WORDPRESS", "ELEMENTOR", "WOOCOMMERCE"],
    type: "wordPress",
  },
  {
    id: 10,
    title: "Alnoor Herbal",
    subtitle: "Herbal Products  & Supplements to Boost Immunity.... ",
    discription: "",
    techStack: ["WORDPRESS", "ELEMENTOR"],
    type: "wordPress",
  },
  {
    id: 11,
    title: "Alnoor International",
    subtitle: "Real Estate Listings Platform for International Buyers.... ",
    discription: "",
    techStack: ["WORDPRESS", "WP-BAKERY", "API INTEGRATION"],
    type: "wordPress",
  },
  {
    id: 12,
    title: "LMS (Teacher Evaluation System Module)",
    subtitle:
      "Educational Management & Evaluation System for Teachers, Students & Admin.... ",
    discription: "",
    techStack: ["REACT.JS", "MUI-V4", "REDUX"],
    type: "react.JS",
  },
  {
    id: 13,
    title: "Small Survival",
    subtitle:
      "Online Course Directory for Students & Teachers to earn money.... ",
    discription: "",
    techStack: ["NEXT.JS", "SEMANTIC-UI", "REDUX"],
    type: "react.JS",
  },
  {
    id: 14,
    title: "Tech Survival",
    subtitle: "Global & Local Tech News Portal for Tech Enthusiasts.... ",
    discription: "",
    techStack: ["NEXT.JS", "SEMANTIC-UI", "RAPID API SDK"],
    type: "react.JS",
  },
  {
    id: 15,
    title: "Quiz App",
    subtitle: "Interactive Quiz Application for Students.... ",
    techStack: ["HTML", "CSS", "JS"],
    type: "withoutFramework",
  },
];

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Project Details
  </Tooltip>
);

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
                      {portfolio.title}
                    </h3>
                    <div className="card-description">
                      {portfolio.subtitle}
                      <span
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={toggleDrawer}
                      >
                        click here to see more
                      </span>
                    </div>
                    <strong>Tech Stack</strong>
                    <span />
                    <div role="listitem">
                      <div className="card-tags">
                        {portfolio?.techStack?.map((tech) => (
                          <div className="card-tag">{tech}</div>
                        ))}
                      </div>
                    </div>
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
