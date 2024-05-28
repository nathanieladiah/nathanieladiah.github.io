import { useEffect, useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import { MdOutlineCode } from "react-icons/md";
import ProjectCard from "../ProjectCard/ProjectCard";
import ServiceCard from "../ServiceCard/ServiceCard";
import mobileProjects from "./mobile.js";
import projects from "./portfolio.js";
import "./workSection.scss";

const WorkSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [projectList, setProjectList] = useState(mobileProjects);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      if (width < 700) {
        setProjectList(mobileProjects);
      } else {
        setProjectList(projects);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [width]);

  const projectCards = projectList.map((project) => (
    <ProjectCard
      key={project.title}
      image={project.image}
      title={project.title}
      description={project.description}
    />
  ));

  return (
    <section className="work">
      <div className="container">
        <div className="section section--services">
          <h2 className="section__header">Services</h2>
          <h3 className="section__subheader">
            What <span className="accent">I do</span>.
          </h3>
          <div className="services">
            <ServiceCard
              icon={<MdOutlineCode />}
              number={"01"}
              title={"Web Development"}
              content={
                "I use my knowledge of various programming language such as HTML5, CSS3, JAVASCRIPT to build digital solutions for users."
              }
              variant={"accent"}
            />
            <ServiceCard
              icon={<GiPencilBrush />}
              number={"02"}
              title={"UI Design"}
              content={
                "Crafting user-centric digital experiences that seamlessly blend aesthetics and functionality. Expert in user-centered design and responsive interfaces."
              }
            />
            <ServiceCard
              icon={<FaWandMagicSparkles />}
              number={"03"}
              title={"Content Writing"}
              content={
                "Weaving impactful narratives and delivering engaging content that resonates with readers. Skillfully combining creativity with research to create compelling pieces."
              }
            />
          </div>
        </div>
        <div className="section section--portfolio">
          <h2 className="section__header">Portfolio</h2>
          <h3 className="section__subheader">
            Featured <span className="accent">projects</span>.
          </h3>
          <div className="projects">{projectCards}</div>
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
