import "./styles.css";
import { Link } from "react-router-dom";

function Back(page) {
  return (
    <div className="back-button">
      <main>
        <Link to={page}>
          {/*TODO back icon*/}
        </Link>
      </main>
      <div className="divider"></div>
    </div>
  );
}

export default Back;
