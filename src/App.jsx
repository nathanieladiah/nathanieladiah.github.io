import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/login/Login";
import Portfolio from "./pages/Portfolio/Portfolio";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
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
