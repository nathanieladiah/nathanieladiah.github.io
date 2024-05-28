import PropTypes from "prop-types";
import "./projectCard.scss";

const ProjectCard = ({ image, title, description, liveLink, githubLink }) => {
  return (
    <a
      className="project-card"
      href={githubLink ? githubLink : liveLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default ProjectCard;
