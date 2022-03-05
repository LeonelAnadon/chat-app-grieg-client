import React, { useEffect } from "react";
import { useState } from "react";
import "./Modal.css";

const Modal = ({ users, setActiveUsers, activeUsers, name }) => {
  const [modal, setModal] = useState(false);
  const [appear, setAppear] = useState(false);

  let capNameUsers = users.map((user) => ({
    ...user,
    name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
  }));

  let filterUsers = capNameUsers.filter(users => (users.name).toLowerCase() !== name.toLowerCase())

  useEffect(() => {
    if (activeUsers) {
      setModal(true);
      setTimeout(() => {
        setAppear(true);
      }, 100);

      setActiveUsers(false);
    }
  }, [activeUsers]);

  const handleClick = () => {
    setAppear(false);
    setTimeout(() => {
      setModal(false);
    }, 100);
  };


  return (
    <>
      {modal ? (
        <div className="modal">
          <div
            className={appear ? "modalUsers appear" : "modalUsers disappear"}
          >
            <div className={`usersList`}>
              {
              filterUsers.length === 0 ? <div className="noUsers">Nadie por aquí...</div> :
              filterUsers.map((users) => (
                <div className="activeUsers" key={users.id}><span>&#10687;</span>{users.name}</div>
              ))
              }
            </div>
            <button onClick={handleClick}>Cerrar</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
