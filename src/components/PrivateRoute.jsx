import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase.config";

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setCheckingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  if (checkingStatus) {
    return <div>Spinner</div>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
