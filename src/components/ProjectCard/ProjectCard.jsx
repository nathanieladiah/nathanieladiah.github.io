import PropTypes from "prop-types";
import "./projectCard.scss";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectCard;
