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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Icon from "../../assets/icon.png";
import { useState } from "react";
import PostModal from "./post-modal";

function NavigationBar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogOut = async () => {
    await logout();
    navigate("/");
  };

  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="navigation-bar">
      <PostModal isOpen={isModalOpen} toggleModal={toggleModal} />
      <div className="left-side">
        <main>
          <div className="logo-title">
            <img src={Icon} alt="Logo backpack" className="logo" />
            <h1 className="title">Backpack</h1>
          </div>

          <div className="navbar">
            <Link to={"/"}>
              <div className="navbar-item-container">
                <div className="navbar-item">
                  <LuNotebookText className="icon" />
                  <h1>Diário</h1>
                </div>
              </div>
            </Link>

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

            <Link to={"/messages"}>
              <div className="navbar-item-container">
                <div className="navbar-item">
                  <FaRegPaperPlane className="icon" />
                  <h1>Mensagens</h1>
                </div>
              </div>
            </Link>

            <div className="navbar-item-container">
              <div className="navbar-item">
                <MdOutlinePeopleAlt className="icon" />
                <h1>Comunidades</h1>
              </div>
            </div>

            <button className="blue button" onClick={toggleModal}>
              <FaPlus className="blue" />
            </button>
          </div>
        </main>
        <footer>
          <MdExitToApp className="icon" onClick={handleLogOut} />
          <ProfileBadge user={user} isAuthUser={true} />
        </footer>
      </div>
    </div>
  );
}

export default NavigationBar;
