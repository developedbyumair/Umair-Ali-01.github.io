import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Project Details
  </Tooltip>
);

export const PortfolioSection = ({ portfolio, handleProjectDetails }) => {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="portfolio-box">
        <div className="portfolio-wrap">
          <img
            src={`assets/img/${portfolio.backgroundImage}.png`}
            alt="image"
            loading="lazy"
            className="card-thumbnail"
          />
          <div className="portfolio-info">
            <div
              className="portfolio-links"
              onClick={() => {
                handleProjectDetails(portfolio.projectDetails);
              }}
            >
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
              onClick={() => {
                handleProjectDetails(portfolio.projectDetails);
              }}
            >
              click here to see more
            </span>
          </div>
          <strong>Tech Stack</strong>
          <span />
          <div role="listitem">
            <div className="card-tags">
              {portfolio?.techStack?.map((tech) => (
                <div className="card-tag" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
