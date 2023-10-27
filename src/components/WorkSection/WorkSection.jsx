import ServiceCard from "../ServiceCard/ServiceCard";
import "./workSection.scss";

const WorkSection = () => {
  return (
    <section className="work container">
      <div className="section section--services">
        <h2 className="section__header">Services</h2>
        <h3 className="section__subheader">
          What <span className="accent">I do</span>.
        </h3>
        <div className="services">
          {/* <div className="services__card services__card--highlight"></div>
          <div className="services__card"></div>
          <div className="services__card"></div> */}
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
