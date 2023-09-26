import { Image, Carousel, Button } from "react-bootstrap";
import React from "react";

export const ProjectDetails = ({ project }) => {
  const { sliderImages } = project;
  return (
    <div className="project-details">
      <div className="project-details__header">
        <strong>{project.title}</strong>
      </div>
      <Carousel>
        {sliderImages?.map((image) => (
          <Carousel.Item>
            <Image
              src={`assets/img/${image}.png`}
              style={{ height: "300px", width: "100%", borderRadius: "20px" }}
              alt="image"
            />
          </Carousel.Item>
        ))}
        {/* <Carousel.Item>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/UDKajZYuzYQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Carousel.Item> */}
      </Carousel>
      <div className="project-details__discription">
        <strong>Projct Scope</strong>
        <div className="project-description">{project.detailDiscription}</div>
      </div>
      <div className="project-details__links">
        <Button className="projectButton">
          <img src="assets/img/github.svg" />
          <span>Continue with Github</span>
        </Button>
        <p>
          Sorry for the inconvenience, this project code is not available for
          public.
        </p>
        <Button className="projectButton">
          <img src="assets/img/live.svg" />
          Click here to see live
        </Button>
        <div className="user-avatar-container">
          <span className="user-avatar-line" />
          <img
            src="https://cdn.dribbble.com/users/78433/avatars/small/305e1c98dca8c28213f093b08aed255b.png?1544179193"
            alt="Banner"
            className="user-avatar"
          />
          <span className="user-avatar-line" />
        </div>
        <strong
          style={{
            margin: "10px auto",
            textAlign: "center",
            display: "block",
          }}
        >
          (Umair Ali)
        </strong>
        <p
          style={{
            margin: "10px auto",
            textAlign: "center",
            display: "block",
          }}
        >
          Experienced full-stack web development
        </p>
        <div className="project-details__fellowme">
          {/*  */}
          <p>Follow me on</p>
          <div className="share">
            <button className="btn2">
              <svg
                height="30px"
                width="30px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="twitter"
              >
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
              </svg>
              <span className="tooltiptext2">
                <div className="card">
                  <svg
                    fill="#000000"
                    width="24px"
                    viewBox="0 0 24 24"
                    height="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="account"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div className="username">@meontwitter</div>
              </span>
            </button>
            <button className="btn3">
              <svg
                height="30px"
                width="30px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                className="git"
              >
                {" "}
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <span className="tooltiptext3">
                <div className="card">
                  <svg
                    fill="#000000"
                    width="24px"
                    viewBox="0 0 24 24"
                    height="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="account"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div className="username">@meongit</div>
              </span>
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
