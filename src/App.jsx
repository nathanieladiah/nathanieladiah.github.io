import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Header from "./components/Header/Header";
import WorkSection from "./components/WorkSection/WorkSection";

const App = () => {
  return (
    <>
      <Header />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <ToastContainer />
    </>
  );
};
export default App;
