import SectionTitle from "./SectionTitle";
import { Image } from "react-bootstrap";

const serviceData = [
  {
    id: 1,
    name: "Full Stack Development",
    desc: "Full stack development of web and mobile apps.",
    img: "assets/img/fullstack.png",
    delay: ".2s",
  },
  {
    id: 2,
    name: "SDK \u00A0 Integrations",
    desc: "Seamless integration of various SDKs into your apps.",
    img: "assets/img/sdks.png",
    delay: ".4s",
  },
  {
    id: 3,
    name: "WordPress Development",
    desc: "Custom, secure, and SEO-friendly WordPress websites.",
    img: "assets/img/wordpress.png",
    delay: ".6s",
  },
  {
    id: 4,
    name: "Dapps Development",
    desc: "Secure and efficient Dapps using blockchain technology.",
    img: "assets/img/dapps.png",
    delay: ".8s",
  },
];

const Services = () => {
  return (
    <>
      <section id="services" className="section services-section">
        <div className="container">
          <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
          <div className="services-area pt-35 pb-95">
            <div>
              <div className="row justify-content-center">
                {serviceData.map((service) => (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-10"
                    key={service.id}
                  >
                    <div
                      className="services-item wow fadeInUp"
                      data-wow-delay={service.delay}
                    >
                      <div className="services-icon">
                        <img src={service.img} alt={service.name} />
                      </div>
                      <div className="services-content">
                        <h4 className="title">
                          <a href="services-details.html">{service.name}</a>
                        </h4>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
