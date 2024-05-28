import { MdOutlineBusinessCenter } from "react-icons/md";
import headshot from "../../assets/img/headshot.jpg";
import desktopImage from "../../assets/img/skills/skills_desktop.png";
import mobileImage from "../../assets/img/skills/skills_mobile.png";
import tabletImage from "../../assets/img/skills/skills_tablet.png";
import Button from "../common/Button/Button";

import { useEffect, useState } from "react";
import "./aboutSection.scss";

const AboutSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const skillImageStyles = {
    backgroundImage:
      width < 700
        ? `url(${mobileImage})`
        : width < 1440
        ? `url(${tabletImage})`
        : `url(${desktopImage})`,
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section section--bio">
          <div className="headers">
            <h2 className="section__header">My Bio</h2>
            <h3 className="section__subheader">
              About <span className="accent">me</span>.
            </h3>
          </div>

          <div className="img-container">
            <img src={headshot} alt="" />
          </div>
          <div className="about-content">
            <p>
              Hi there! I&apos;m a web developer who loves to create awesome
              websites and apps. I have a passion for coding and learning new
              technologies. I enjoy working on challenging projects that require
              creativity and problem-solving skills.
            </p>
            <p>
              I&apos;m also a nerd who loves reading books and writing stories.
              I like to explore different genres and topics, from science
              fiction to historical fiction. I have a blog where I share my
              thoughts and opinions on various books and authors.
            </p>
            <p>
              If you want to know more about me or my work, feel free to contact
              me anytime. I look forward to hearing from you.
            </p>

            <Button
              link={"resume.pdf"}
              variant={"icon"}
              icon={<MdOutlineBusinessCenter />}
            >
              View Resume
            </Button>
          </div>
        </div>

        <div className="section section--skills">
          <div className="headers">
            <h2 className="section__header">Skills</h2>
            <h3 className="section__subheader">
              Technical <span className="accent">skills</span>.
            </h3>
          </div>
          <div className="skills-description">
            <p>
              I have experience in building dynamic and responsive websites
              using React, JavaScript, and Django.
            </p>
            <p>
              I can work with both front-end and back-end aspects of web
              development, as well as integrate with various APIs and databases.
              I am proficient in writing clean and maintainable code that
              follows best practices and standards.
            </p>
          </div>
          <div className="skills-list" style={skillImageStyles}></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
