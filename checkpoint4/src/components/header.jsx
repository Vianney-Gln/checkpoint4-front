import "../styles/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <nav>
        <ul>
          <li>Logo</li>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/post">
            <li>Poster un Facts</li>
          </Link>
          <Link to="/login">
            {" "}
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
