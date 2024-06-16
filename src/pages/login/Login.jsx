import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import useAuthStatus from "../../hooks/useAuthStatus";

import image1 from "./images/image-1.png";
import image2 from "./images/image-2.png";

import { MdLockOutline, MdOutlinePerson } from "react-icons/md";
// import "./login.scss";

const Login = () => {
  // Time of day
  const date = new Date();
  const currentHour = date.getHours();

  // const [showPassword, setShowPassword] = useState(false)
  const showPassword = false;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      if (userCredentials.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Invalid User Credentials");
    }
  };

  let time = "";

  if ((currentHour >= 12) & (currentHour < 18)) {
    time = "afternoon";
  } else if (currentHour >= 18) {
    time = "night";
  } else {
    time = "morning";
  }

  const { loggedIn, checkingStatus } = useAuthStatus;

  if (checkingStatus) {
    return <div>Spinner</div>;
  }

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="wrapper">
      <div className="inner">
        <img src={image1} className="image-1" alt="" />
        <form onSubmit={onSubmit}>
          <h3>
            Good <span className="time">{time}</span>
          </h3>
          <div className="form-holder">
            {/* <span className="lnr lnr-user"></span> */}
            <MdOutlinePerson />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-holder">
            {/* <span className="lnr lnr-lock"></span> */}
            <MdLockOutline />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <button>
            <span>Login</span>
          </button>
        </form>
        <img src={image2} className="image-2" alt="" />
      </div>
    </div>
  );
};
export default Login;
