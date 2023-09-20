import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook to restrict access to logged-in users
const useRequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to the login page if the user is not authenticated
      navigate("/login");
    }
  }, []);

  return null;
};

export default useRequireAuth;
