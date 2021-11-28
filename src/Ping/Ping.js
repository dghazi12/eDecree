import { useEffect, useState } from "react";

import "./Ping.css";

const Ping = ({ remove }) => {
  const [pingResponse, setPingResponse] = useState("");

  useEffect(() => {
    fetch("https://devca.structura.ai/api/devtest/ping", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setPingResponse(response.msg);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="ping-container">
      <p onClick={remove} className="remove-button">
        X
      </p>
      <h2>{pingResponse}</h2>
    </div>
  );
};

export default Ping;
