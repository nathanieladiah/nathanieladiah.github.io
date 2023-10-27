import { MdOutlineCode } from "react-icons/md";
import "./serviceCard.scss";
const ServiceCard = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="icon">
          <MdOutlineCode />
        </div>
        <div className="number">01</div>
      </div>
      <h4 className="card__title">Web Development</h4>
      <hr />
      <p className="card__text">
        I use my knowledge of various programming languages such as HTML5, CSS3,
        JavaScript to build digital solutions for users.
      </p>
    </div>
  );
};
export default ServiceCard;
