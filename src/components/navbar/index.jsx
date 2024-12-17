import "./styles.css";

import ProfileBadge from "../profile/badge";
import { LuNotebookText } from "react-icons/lu";
import {
  FaRegBell,
  FaRegPaperPlane,
  FaRegCompass,
  FaPlus,
} from "react-icons/fa";
import { MdExitToApp, MdOutlinePeopleAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function NavigationBar() {
  const navigate = useNavigate()
  const { logout } = useAuth();

  const handleLogOut = async () => {
    await logout();

    navigate("/")
  }

  return (
    <div className="navigation-bar">
      <div className="left-side">
        <main>
          <div className="logo-title">
            <img src="icon.png" alt="Logo backpack" className="logo" />
            <h1 className="title">Backpack</h1>
          </div>
          <div className="navbar">
            <div className="navbar-item-container">
              <div className="navbar-item">
                <LuNotebookText className="icon" />
                <h1>Diário</h1>
              </div>
            </div>

            <div className="navbar-item-container">
              <div className="navbar-item">
                <FaRegCompass className="icon" />
                <h1>Explorar</h1>
              </div>
            </div>

            <div className="navbar-item-container">
              <div className="navbar-item">
                <FaRegBell className="icon" />
                <h1>Notificações</h1>
              </div>
            </div>

            <div className="navbar-item-container">
              <div className="navbar-item">
                <FaRegPaperPlane className="icon" />
                <h1>Mensagens</h1>
              </div>
            </div>

            <div className="navbar-item-container">
              <div className="navbar-item">
                <MdOutlinePeopleAlt className="icon" />
                <h1>Comunidades</h1>
              </div>
            </div>

            <button className="blue button">
              <FaPlus className="blue" />
            </button>
          </div>
        </main>
        <footer>
          <MdExitToApp className="icon" onClick={handleLogOut} />
          <ProfileBadge />
        </footer>
      </div>
    </div>
  );
}

export default NavigationBar;
