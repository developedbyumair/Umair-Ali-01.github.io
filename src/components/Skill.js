import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "HTML", icon: "fab fa-html5" },
  { id: 2, name: "CSS", icon: "fab fa-css3" },
  { id: 3, name: "JS", icon: "fab fa-js" },
  { id: 4, name: "React JS", icon: "fab fa-react" },
  { id: 5, name: "Next Js", icon: "fa fa-next" },
  { id: 6, name: "Node JS", icon: "fab fa-node-js" },
];
const experiencesData = [
  {
    id: 1,
    date: "April 2022-Present",
    designation: "Front-end Software Engineer",
    company: "Invotyx",
  },
  {
    id: 2,
    date: "April 2021-Present",
    designation: "Freelance Web Developer",
    company: "Upwork, Fiverr, Freelancer,linkedin",
  },
  {
    id: 3,
    date: "April 2023-Present",
    designation: "MERN Stack Software Engineer",
    company: "BuildupSol",
  },
  {
    id: 4,
    date: "July 2021- Jan 2022",
    designation: "WordPress Developer",
    company: "AJ Developers",
  },
  {
    id: 5,
    date: "May 2019- Aug 2019",
    designation: "Junior Front-end Developer",
    company: "BrainArt",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Full-Stack Web Development"}
              text={
                "Experienced full-stack web developer specializing in React.js, Next.js, and Node.js. Passionate about delivering high-quality, performant web applications."
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        {skill.name}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Tech Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      {experience.date}
                    </h6>
                    <div className="eb-right">
                      <h5
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        {experience.designation}
                      </h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "150px",
                  top: "36%",
                  mixBlendMode: "darken",
                }}
              >
                <img src="assets/img/test.jpg" alt="hireMe" />
              </div>
              <img
                src="https://static.wixstatic.com/media/06b579_55d26e60c05e49809330ed6df177be40~mv2.png/v1/fill/w_497,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/about.png"
                alt="hireMe"
              />
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
