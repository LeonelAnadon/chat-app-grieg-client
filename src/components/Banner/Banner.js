import React from "react";
import "./Banner.css";

const Banner = ({room, allUsers, setActiveUsers}) => {

  let howManyUsers = allUsers.length === 0 ? 0 : allUsers.length - 1

  const titleColor = {
    roomRed: {
      backgroundColor: "#ffffff",
    },
    roomBlue: {
      backgroundColor: "#ffffff",
    },
    roomYellow: {
      backgroundColor: "#ffffff",
    },
  };

  return (
    <div className="banner">
      <span onClick={() => setActiveUsers(true)} title="En linea">&#10687;<p title="En linea">{howManyUsers.toString()}</p></span>
      <h1
        style={
          room === "roomBlue"
            ? titleColor.roomBlue
            : room === "roomRed"
            ? titleColor.roomRed
            : titleColor.roomYellow
        }
      >
        {room === "sigmaRoom"
          ? <>Sala Sigma &#931;</> 
          : room === "omegaRoom"
          ? <>Sala Omega &#937;</>
          : <>Sala Beta &#946;</>}
      </h1>
      <a href="/" title="Salir">&#215;</a>
    </div>
  );
};

export default Banner;
