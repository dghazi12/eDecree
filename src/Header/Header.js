import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

import Ping from "../Ping/Ping";
import "./Header.css";

const Header = ({ handleLogout }) => {
  const [visibility, setVisibility] = useState(false);

  const getPing = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <div className="header-container">
        <FontAwesomeIcon
          icon={faCompass}
          className="compass"
          onClick={getPing}
        />
        <h1 className="main-title">Technical Test Results</h1>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </div>

      {visibility ? <Ping remove={getPing} /> : null}
    </>
  );
};

export default Header;
