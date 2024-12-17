import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../layout";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) navigate("/login");

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedRoute;
