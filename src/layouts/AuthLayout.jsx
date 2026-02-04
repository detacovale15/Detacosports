import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const AuthLayout = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // o un spinner

  if (user?.admin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
