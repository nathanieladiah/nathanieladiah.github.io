import { MdOutlineBusinessCenter } from "react-icons/md";
import headshot from "../../assets/img/headshot.jpg";
import Button from "../common/Button/Button";

import "./aboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about">
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
              link={"#"}
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
          {/* <div className="skills-list">
            <div className="skill skill--html5">Html5</div>
            <div className="skill skill--js">javascript</div>
            <div className="skill skill--react">react</div>
            <div className="skill skill--css">css</div>
            <div className="skill skill--md">mongodb</div>
            <div className="skill skill--django">django</div>
            <div className="skill skill--node">node.js</div>
          </div> */}
          {/* Use an image for the skills list instead */}
          <div className="skills-list"></div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
