import PropTypes from "prop-types";
import "./serviceCard.scss";
const ServiceCard = ({ icon, number, title, content, variant }) => {
  return (
    <div className={`card ${variant === "accent" ? "card--accent" : ""}`}>
      <div className="card__header">
        <div className="icon">{icon}</div>
        <div className="number">{number}</div>
      </div>
      <h4 className="card__title">{title}</h4>
      <hr className={`${variant === "accent" ? "accent" : ""}`} />
      <p className="card__text">{content}</p>
    </div>
  );
};

ServiceCard.defaultProps = {
  variant: "default",
};

ServiceCard.propTypes = {
  icon: PropTypes.node,
  number: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string,
};

export default ServiceCard;
