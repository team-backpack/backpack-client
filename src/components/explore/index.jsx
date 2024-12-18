import { FiSearch } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import CommunityBadge from "../community/badge";
import ProfileBadge from "../profile/badge";
import { LuUser } from "react-icons/lu";
import "./styles.css";
import { useAuth } from "../../context/AuthContext";

function Explore() {
  const { user } = useAuth();

  return (
    <div className="explore">
      <div className="search">
        <form>
          <div className="form-control">
            <div className="input-icons">
              <FiSearch className="icon left" />
              <input
                type="text"
                placeholder="Pesquisar"
                className="icon-left"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="communities">
        <header className="title">
          <MdOutlinePeopleAlt className="icon" />
          <h2>Comunidades</h2>
        </header>
        <main>
          <CommunityBadge />
          <CommunityBadge />
        </main>
      </div>
      <div className="profiles">
        <header className="title">
          <LuUser className="icon" />
          <h2>Contas que você pode gostar</h2>
        </header>
        <main>
          <ProfileBadge user={user} isAuthUser={false} />
          <ProfileBadge user={user} isAuthUser={false} />
          <ProfileBadge user={user} isAuthUser={false} />
        </main>
      </div>
    </div>
  );
}

export default Explore;
