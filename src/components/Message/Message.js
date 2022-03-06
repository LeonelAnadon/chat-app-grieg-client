import React from "react";
import ReactEmoji from "react-emoji";
import "./Message.css";
import { Howl, Howler } from "howler";
import ringtone from "../../assets/ringtone.mp3";
import adminRingtone from "../../assets/adminSfx.mp3";

import { useEffect } from "react";

const Message = ({ children, user, name }) => {
  let capUser = user.charAt(0).toUpperCase() + user.slice(1);
  let isSendByCurrentUser = false;
  let isSendByAdmin = false;

  let trimmeredName = name.trim().toLowerCase();

  if (user === trimmeredName) {
    isSendByCurrentUser = true;
  }

  if (user === "admin") {
    isSendByAdmin = true;
  }

  useEffect(() => {
    if (user != trimmeredName && user != "admin") {
      let sound = new Howl({
        src: ringtone,
        volume: 0.5,
      });
      sound.play();
    }
    if (user != trimmeredName && user == "admin") {
      let sound = new Howl({
        src: adminRingtone,
        volume: 0.5,
      });
      sound.play();
    }
  }, [user]);


  return isSendByCurrentUser ? (
    <div className="messageContainer right">
      <div className="messageInnerContainer ">
        <span>{capUser}</span>
        <p className="message">{ReactEmoji.emojify(children)}</p>
      </div>
    </div>
  ) : isSendByAdmin ? (
    <div className="messageContainer left">
      <div className="messageInnerContainer admin">
        <span>{}</span>
        <p className="message">{children}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer left">
      <div className="messageInnerContainer currentUserMsgContainer">
        <span>{capUser}</span>
        <p className="message">{ReactEmoji.emojify(children)}</p>
      </div>
    </div>
  );
};

export default Message;
