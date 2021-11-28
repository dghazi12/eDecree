import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListUl } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/">
        <FontAwesomeIcon icon={faHome} className="navbar-font" />
      </a>
      <a href="/countries">
        <FontAwesomeIcon icon={faListUl} className="navbar-font" />
      </a>
    </div>
  );
};

export default Navbar;
