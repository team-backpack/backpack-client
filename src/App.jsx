import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login";
import NotFound from "./pages/not-found";
import Register from "./pages/auth/register";

function App() {
  const authUser = null;

  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? null : <Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
