import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import loadingAnimation from '../../assets/loadingAnimation.gif'
import "./LoadingPage.css";

const LoadingPage = () => {
  const [search] = useSearchParams();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  let navigate = useNavigate()



  useEffect(() => {

    const { name, room } = {
      name: search.get("name"),
      room: search.get("room"),
    };
    setName(search.get("name"));
    setRoom(search.get("room"));

    setTimeout(() => {
      navigate(`/chat?name=${name}&room=${room}`)
    }, 1500)

  }, [])
  

  return <div className="loadingPage"><img src={loadingAnimation}/></div>;
};

export default LoadingPage;
