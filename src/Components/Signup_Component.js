import React from "react";
import "../Styles/Signup_Component.css";
import { useNavigate } from "react-router-dom";

export default function Singup_Component() {
  const navigate = useNavigate();
  return (
    <div className="SMain">
      <div className="SBox1">
        <h1 className="SFont"> Signup</h1>
        <input
          type="email"
          autocomplete="off"
          name="email"
          className="Sinput"
          placeholder="Email"
        ></input>
        <input
          type="name"
          autocomplete="off"
          name="FirstName"
          className="Sinput"
          placeholder="Firstname"
        ></input>
        <input
          type="name"
          autocomplete="off"
          name="LastName"
          className="Sinput"
          placeholder="LastName"
        ></input>
        <input
          type="password"
          autocomplete="off"
          name="password"
          className="Sinput"
          placeholder="Password"
        ></input>

        <button onClick={() => navigate("/home")}>Signup</button>
      </div>
      <div className="SDivider"></div>
      <div className="SBox2">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "35%",
            }}
          >
            <h2 className="SFont">Already a user?</h2>
            <button onClick={() => navigate("/")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
