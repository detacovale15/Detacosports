import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AdminLogin from "../../pages/AdminLogin";
import Loading from "../common/Loading";

const AdminRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  if (user?.isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <AdminLogin />;
};

export default AdminRoute;
