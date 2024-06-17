import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";

const Admin = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  );
};
export default Admin;
