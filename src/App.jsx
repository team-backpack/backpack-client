import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login";
import NotFound from "./pages/not-found";
import Register from "./pages/auth/register";
import Feed from "./pages/feed";
import { Toaster } from "react-hot-toast";

function App() {
  const authUser = false;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Feed /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
