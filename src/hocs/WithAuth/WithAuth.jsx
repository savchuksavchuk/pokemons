import { Navigate } from "react-router";
import { useAuth } from "../../providers/AuthProvider";

export const WithAuth = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="login" />;
  }

  return children;
};
