import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminLayout = () => {
  return (
    <>
      <NavbarAdmin />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
