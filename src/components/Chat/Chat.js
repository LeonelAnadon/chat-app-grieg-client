import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Chat.css";
import io from "socket.io-client";
import Input from "../Input/Input";
import Banner from "../Banner/Banner";
import Messages from "../Messages/Messages";
import Modal from "../Modal/Modal";

let socket;
const ENDPOINT = "https://chat-app-grieg-server.herokuapp.com/";

const Chat = () => {
  const [search] = useSearchParams();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState(false);
  let navigate = useNavigate();
  let maxMessages = 150;

  useEffect(() => {
    const { name, room } = {
      name: search.get("name"),
      room: search.get("room"),
    };
    setName(search.get("name"));
    setRoom(search.get("room"));

    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (msg) => {
      if (msg === "User already taken") {
        navigate("/error");
      }
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    // console.log("TRIGGERD");
    socket.on("roomData", ({ users }) => {
      setAllUsers(users);
    });
  }, []);

  useEffect(() => {
    if(messages.length === maxMessages){
      setMessages([])
    }
  }, [messages])


  const sendMessage = ({ data, reset }) => {
    if (data.inputChat) {
      socket.emit("sendMessage", data.inputChat, () => {
        reset();
      });
    }
  };

  return (
    <>
      <Modal name={name} users={allUsers} setActiveUsers={setActiveUsers} activeUsers={activeUsers} />

      <div className="chatContainer">
        <div className="chatInnerContainer">
          <Banner
            setActiveUsers={setActiveUsers}
            room={room}
            allUsers={allUsers}
          />
          <div className="chatMessages">
            <Messages name={name} messages={messages} />
          </div>
          <Input sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default Chat;
