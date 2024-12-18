import { FiSearch } from "react-icons/fi";
import ProfileBadge from "../profile/badge";
import { LuUser } from "react-icons/lu";
import "./styles.css";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

function Explore() {
  const { loading, users, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

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
      <div className="profiles">
        <header className="title">
          <LuUser className="icon" />
          <h2>Contas que você pode gostar</h2>
        </header>
        <main>
          {loading ? (
            <div className="spinner">
              <BeatLoader loading={loading} />
            </div>
          ) : (
            <>
              {users.map((user, i) => (
                <ProfileBadge key={i} user={user} isAuthUser={false} />
              ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Explore;
