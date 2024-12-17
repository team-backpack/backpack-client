import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/login";
import NotFound from "./pages/not-found";
import Register from "./pages/auth/register";
import Feed from "./pages/feed";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protect";
import Conversations from "./pages/conversations";
import Conversation from "./pages/conversation";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Feed />} />
          <Route path="/messages">
            <Route index element={<Conversations />} />
            <Route path="/messages/:participantId" element={<Conversation />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
