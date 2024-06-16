import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute";
import WorkSection from "./components/WorkSection/WorkSection";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <WorkSection />
                <AboutSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/messages" element={<PrivateRoute />}>
            <Route
              path="/messages"
              element={
                <>
                  <h1>Messages</h1>
                </>
              }
            />
          </Route>
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
