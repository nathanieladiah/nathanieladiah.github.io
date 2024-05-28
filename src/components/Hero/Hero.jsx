import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero container">
      <h1 className="hero__title">
        Hi, I am <span className="accent">Nathaniel Adiah</span>
      </h1>
      <p className="hero__body">
        A self-taught <span className="accent">Full-stack Developer</span>, I
        create beautiful and responsive websites that work on any device and
        browser.
      </p>
      <div className="hero__socials">
        <a
          href="https://github.com/nathanieladiah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/nathaniel-adiah-361a71223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/nathanieladiah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </section>
  );
};
export default Hero;
