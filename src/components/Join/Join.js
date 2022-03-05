import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("omegaRoom");

  return (
    <div className="joinContainer">
      <div className="joinInnerContainer">
        <h1>Puedes unirte</h1>
        <div className="divInput">
          <input
            type="text"
            autoComplete="fals"
            value={name}
            placeholder="Escribe tu nombre"
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div className="divRadio">
          <input
            checked={room === "omegaRoom" ? true : false}
            onChange={(evt) => setRoom(evt.target.value)}
            type="radio"
            id="omegaRoom"
            value="omegaRoom"
            name="switch"
          />
          <label htmlFor="omegaRoom">Sala Omega &#937;</label>
          <input
            checked={room === "sigmaRoom" ? true : false}
            onChange={(evt) => setRoom(evt.target.value)}
            type="radio"
            id="sigmaRoom"
            value="sigmaRoom"
            name="switch"
          />
          <label htmlFor="sigmaRoom">Sala Sigma &#931;</label>
          <input
            checked={room === "betaRoom" ? true : false}
            onChange={(evt) => setRoom(evt.target.value)}
            type="radio"
            id="betaRoom"
            value="betaRoom"
            name="switch"
          />
          <label htmlFor="betaRoom">Sala Beta &#946;</label>
        </div>
        <Link
          onClick={(evt) => (!name || !room ? evt.preventDefault() : null)}
          // to={`/chat?name=${name}&room=${room}`}
          to={`/loading?name=${name}&room=${room}`}

        >
          <button type="submit" className="joinBtn">
            Entrar!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
