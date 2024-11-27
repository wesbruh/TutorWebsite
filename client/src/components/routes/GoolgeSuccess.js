import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");

    if (token) {
      // Save token and user info
      const user = { name };
      setAuth({ user, token });
      localStorage.setItem("auth", JSON.stringify({ user, token }));
      navigate("/studentdashboard"); // Redirect to dashboard
    } else {
      console.error("Token not found");
      navigate("/login");
    }
  }, [navigate, setAuth]);
};

export default GoogleSuccess;
