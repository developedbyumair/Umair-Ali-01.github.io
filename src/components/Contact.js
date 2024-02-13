import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { id: 1, label: "Phone", value: "+92 302 58 33983", icon: "fas fa-envelope" },
  {
    id: 2,
    label: "Mail",
    value: "developedbyumair@gmail.com",
    icon: "fas fa-phone-alt",
  },
  {
    id: 3,
    label: "Reach Us",
    value: "Islamabad, Pakistan",
    icon: "fas fa-map-marker-alt",
  },
];

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const { name, email, subject, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const buttonRef = useRef(null);
  const confettiAmount = 100;
  const confettiColors = [
    "#7d32f5",
    "#f6e434",
    "#63fdf1",
    "#e672da",
    "#295dfe",
    "#6e57ff",
  ];

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const createConfetti = (to) => {
    let elem = document.createElement("i"),
      set = Math.random() < 0.5 ? -1 : 1;
    elem.style.setProperty("--x", random(-360, 360) + "px");
    elem.style.setProperty("--y", random(-200, 200) + "px");
    elem.style.setProperty("--r", random(0, 360) + "deg");
    elem.style.setProperty("--s", random(0.6, 1));
    elem.style.setProperty("--b", confettiColors[random(0, 5)]);
    to.appendChild(elem);
  };
  const handleClickEvent = (e) => {
    const button = buttonRef.current;
    let complete = false,
      up = 10;
    const timeline = gsap.timeline({
      paused: true,
      ease: "none",
      onComplete() {
        complete = true;
        button.classList.add("complete");
        for (let i = 0; i < confettiAmount; i++) {
          createConfetti(button);
        }
        setTimeout(() => {
          button.classList.add("confetti");
          setTimeout(
            () => button.querySelectorAll("i").forEach((i) => i.remove()),
            600
          );
        }, 300);
        // Reset
        setTimeout(() => {
          button.classList.remove("complete", "confetti");
          complete = false;
        }, 2000);
      },
    });

    timeline.to(button, {
      keyframes: [
        {
          "--weight-y": -6,
          "--arm-rotate-s-x": 90,
          duration: 0.3,
        },
        {
          "--weight-y": -10,
          "--arm-rotate-s-x": 45,
          "--arm-rotate-s": 130,
          duration: 0.2,
        },
        {
          "--weight-y": -12,
          "--arm-rotate-s": 130,
          "--arm-rotate-s-x": 0,
          duration: 0.1,
        },
        {
          "--weight-y": -20,
          "--person-y": -4,
          "--arm-rotate": 100,
          "--arm-rotate-s": 90,
          "--leg-y": 0,
          "--leg-rotate": 20,
          "--leg-rotate-s": -20,
          duration: 0.2,
        },
        {
          "--weight-y": -25,
          "--arm-rotate": 150,
          "--arm-rotate-s": 30,
          duration: 0.2,
        },
      ],
    });

    up = 10;

    const rippleDiv = document.createElement("div");

    rippleDiv.className = "ripple";

    const boundingClientRect = button.getBoundingClientRect();

    button.style.setProperty("--ripple-x", e.clientX - boundingClientRect.left);
    button.style.setProperty("--ripple-y", e.clientY - boundingClientRect.top);

    button.querySelector(".inner").appendChild(rippleDiv);

    setTimeout(() => rippleDiv.remove(), 500);

    const interval = setInterval(() => {
      up = up > 0 ? up - 0.1 : 0;

      let progress = timeline.progress(),
        direction = up > 0 ? 1 : -1.5;

      if (!complete) {
        timeline.progress(progress + 0.01 * direction);
      }
    }, 1000 / 60);

    return () => {
      clearInterval(interval);
    };
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      handleClickEvent(e);
      emailjs
        .send(
          "service_9u9gdab", // service id
          "template_tegmrkv", // template id
          mailData,
          "dz63_aKnjbu-FDH-g" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  return (
    <section className="section contactus-section bg-gray" id="contactus">
      <div className="container">
        <SectionTitle
          heading={"Let's Discuss Project"}
          subHeading={"Contact"}
          text={`Looking for someone to sprinkle creativity on your projects?
           I am here your friendly neighborhood Product Designer`}
        />

        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Get in touch</h6>
              <p className="lead">
                Our friendly team would love to hear from you.
              </p>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (name.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (email.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Project Idea</label>
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Project Idea *"
                        className={`form-control ${
                          error ? (subject.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your Project Details</label>
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Whether it's short-term projects or long-term partnerships, I'm here to support your design needs. Reach out for a virtual coffee chat or to explore how we can create magic together! 🌟 *"
                        rows={4}
                        className={`form-control ${
                          error ? (message.length !== 0 ? "" : "invalid") : ""
                        }`}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: success ? "block" : "none" }}
                    >
                      Message Sent Successfully
                    </span>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button ref={buttonRef} className="button2" type="submit">
                        <div className="inner">
                          <div className="icon">
                            <div className="person">
                              <div className="arm"></div>
                              <div className="arm right"></div>
                              <div className="leg"></div>
                              <div className="leg right"></div>
                            </div>
                            <div className="weight"></div>
                          </div>
                          <div className="text">
                            <span>Smash to submit</span>
                            <span>Yaay! Submitted.</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto col-xl-4 pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <div className="icon">
                    <i className={contact.icon} />
                  </div>
                  <div className="col">
                    <h5>{contact.label}</h5>
                    <p
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {contact.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img src="assets/img/Croods1.svg" className="svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
