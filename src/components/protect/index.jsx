import { Outlet, Navigate } from "react-router-dom";
import Layout from "../layout";
import { useAuth } from "../../context/AuthContext";
function ProtectedRoute() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default ProtectedRoute;
