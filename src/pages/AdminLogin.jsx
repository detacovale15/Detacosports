import LoginForm from "../components/auth/LoginForm";
import Logo from "../assets/Logo";
import { Link } from "react-router";

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <Link to={"/"}>
        <Logo />
      </Link>
      <LoginForm />
    </div>
  );
};

export default AdminLogin;
