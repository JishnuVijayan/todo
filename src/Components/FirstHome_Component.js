import React, { useState } from "react";
import "../Styles/FirstHome_component.css";

export default function FirstHome_Component() {
  const [todo, setTodo] = useState("");
  return (
    <div className="HMain">
      <div className="HBox1">
        <h1 className="HFont">To-Do</h1>
        <div className="InsideHBox1">
          <input
            autocomplete="off"
            name="Todo"
            className="HInput"
            placeholder="Write what todo"
            onChange={(e) => setTodo(e.target.value)}
          ></input>
          <button className="HButton">Submit</button>
        </div>
      </div>
      <div className="HBox2"></div>
    </div>
  );
}
