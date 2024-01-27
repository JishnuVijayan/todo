import React, { useState } from "react";
import "../Styles/Login_Component.css";
import { useNavigate } from "react-router-dom";

export default function Login_Component() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login Succesful");
      navigate("/home");
    } else {
      alert("Check Login credentials");
    }
    console.log(data);
  };

  return (
    <div className="Main">
      <div className="Box1">
        <h1 className="Font"> Login</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 15,
            width: "65%",
            paddingLeft: 20,
          }}
        >
          <input
            type="email"
            autocomplete="off"
            name="email"
            className="input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            autocomplete="off"
            name="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button onClick={login}>Login</button>
      </div>
      <div className="Divider"></div>
      <div className="Box2">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "35%",
            }}
          >
            <h2 className="Font">New here?</h2>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
