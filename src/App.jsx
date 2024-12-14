import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
