import React, { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import "./Messages.css";

const Messages = ({messages, name}) => {

  const [isVisible, setisVisible] = useState("btnScroll isVisible");
  const scrollable = useRef();

  const handleScroll = (e) => {
    let element = e.target;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   // console.log("REACHED")
    // }

    if (element.scrollHeight - element.scrollTop >= 900) {
      setisVisible("btnScroll");
    }
    if (element.scrollHeight - element.scrollTop < 848) {
      setisVisible("btnScroll isVisible");
    }
  };

  useEffect(() => {
    scrollable.current.scrollTo(0, scrollable.current.scrollHeight);
  }, [messages])
  

  const scrollToBottom = () => {
    scrollable.current.scrollTo(0, scrollable.current.scrollHeight);
  };

  return (
    <>
      <div ref={scrollable} onScroll={handleScroll} className="scrollToBottom">
        {messages.map((message, i) => (
          <Message key={i} name={name} user={message.user}>{message.text}</Message>
        ))}
        <div onClick={scrollToBottom} className={isVisible}>
          <span>&laquo;</span>
        </div>
      </div>
    </>
  );
};

export default Messages;
