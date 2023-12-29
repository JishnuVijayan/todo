import React from "react";
import "../Styles/Login_Component.css";
import { useNavigate } from "react-router-dom";

export default function Login_Component() {
  const navigate = useNavigate();
  return (
    <div className="Main">
      <div className="Box1">
        <h1 className="Font"> Login</h1>
        <input
          type="email"
          autocomplete="off"
          name="email"
          className="input"
          placeholder="Email"
        ></input>
        <input
          type="password"
          autocomplete="off"
          name="password"
          className="input"
          placeholder="Password"
        ></input>
        <button onClick={() => navigate("/home")}>Login</button>
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
