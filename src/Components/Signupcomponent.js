import React, { useState } from "react";
import "../Styles/Signup_Component.css";
import { useNavigate } from "react-router-dom";

export default function Singup_Component() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/login");
    }

    console.log(data);
  };
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
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="name"
          autocomplete="off"
          name="FirstName"
          className="Sinput"
          placeholder="Firstname"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="name"
          autocomplete="off"
          name="LastName"
          className="Sinput"
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="password"
          autocomplete="off"
          name="password"
          className="Sinput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick={registerUser}>Signup</button>
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
