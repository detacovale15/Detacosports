import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/common/Loading";

const AdminProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  if (!user?.admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
