import agriMobile from "../../assets/img/portfolio/agri-mobile.png";
import agri from "../../assets/img/portfolio/agri-preview.png";
import blogMobile from "../../assets/img/portfolio/blog-mobile.png";
import blog from "../../assets/img/portfolio/blog-preview.png";
import interiorMobile from "../../assets/img/portfolio/interior-design-mobile.png";
import interior from "../../assets/img/portfolio/interior-design-preview.png";
import introMobile from "../../assets/img/portfolio/intro-section-mobile.png";
import intro from "../../assets/img/portfolio/intro-section-preview.png";
import markdownMobile from "../../assets/img/portfolio/markdown-mobile.png";
import markdown from "../../assets/img/portfolio/markdown-preview.png";
import spaceMobile from "../../assets/img/portfolio/space-tourism-mobile.png";
import space from "../../assets/img/portfolio/space-tourism-preview.png";
const projects = [
  {
    image: blog,
    mobileImage: blogMobile,
    title: "Blogging Webapp",
    description:
      "A web application I developed to host multiple blogs. I used Django and Bootstrap to develop this.",
  },
  {
    image: space,
    mobileImage: spaceMobile,
    title: "Space Tourism Website",
    description:
      "Solution for a space tourism website frontend mentor challenge. Built with SASS, this was an exercise in responsive layouts.",
  },
  {
    image: markdown,
    mobileImage: markdownMobile,
    title: "Markdown Editor",
    description:
      "A simple markdown editor and previewer webapp. A personal project I'm developing using React.",
  },
  {
    image: intro,
    mobileImage: introMobile,
    title: "Intro Section",
    description:
      "Solution for an intro section frontend mentor challenge. I'm pretty proud of the mobile menu transaction on this one.",
  },
  {
    image: interior,
    mobileImage: interiorMobile,
    title: "Modern Interior",
    description:
      "Frontend homepage design challenge from dev-challenges.io for an interior design company. I'm also proud of the mobile menu.",
  },
  {
    image: agri,
    mobileImage: agriMobile,
    title: "Agri Processing Portfolio",
    description: "Portfolio website to display agri-processing project.",
  },
];

export default projects;
