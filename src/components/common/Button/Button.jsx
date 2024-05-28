import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ link, variant, icon, children }) => {
  return (
    <a
      className={`button ${variant === "icon" ? "button--icon" : ""}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {variant === "icon" && <span>{icon}</span>}
    </a>
  );
};

Button.defaultProps = {
  variant: "default",
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  link: PropTypes.string,
  variant: PropTypes.string,
};
export default Button;
