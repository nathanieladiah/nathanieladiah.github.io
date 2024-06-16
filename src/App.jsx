import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import Portfolio from "./pages/Portfolio/Portfolio";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="/sign-in" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
