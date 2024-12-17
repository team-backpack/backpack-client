import Explore from "../explore";
import NavigationBar from "../navbar";

function Layout({ children }) {
  return (
    <div className="container large">
      <NavigationBar />
      <div className="divider"></div>
      {children}
      <div className="divider"></div>
      <Explore />
    </div>
  );
}

export default Layout;
