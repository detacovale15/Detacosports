import { Routes, Route, BrowserRouter } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminProtectedRoute from "./router/AdminProtectedRoute";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/admin" element={<AdminRoute />} />
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/*<Route path="/admin/products" element={<Products />} />*/}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
