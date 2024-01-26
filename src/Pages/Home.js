import React, { useEffect } from "react";
import Firsthomecomponent from "../Components/Firsthomecomponent";
import { useNavigate } from "react-router-dom";
const jwt = require("jose");
export default function Home() {
  const checkCredentials = async () => {
    const req = await fetch("https://localhost:1337/api/home", {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    const data = req.json();
    console.log(data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/");
      } else {
        checkCredentials();
      }
    }
  }, []);
  return (
    <div>
      <Firsthomecomponent />
    </div>
  );
}
