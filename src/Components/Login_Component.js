import React from "react";
import "../Styles/Login_Component.css";

export default function Login_Component() {
  return (
    <div className="Main">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      ></link>
      <div className="Box1">
        <h1 className="Font"> LOGIN</h1>
        <input
          type="email"
          autocomplete="off"
          name="email"
          class="input"
          placeholder="Email"
        ></input>
        <input
          type="password"
          autocomplete="off"
          name="password"
          class="input"
          placeholder="Password"
        ></input>
        <button>LOGIN</button>
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
            <h2 className="Font">NEW HERE ?</h2>
            <button>SIGNUP</button>
          </div>
        </div>
      </div>
    </div>
  );
}
