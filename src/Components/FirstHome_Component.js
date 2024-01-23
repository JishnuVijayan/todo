import React from "react";
import "../Styles/FirstHome_component.css";

export default function FirstHome_Component() {
  return (
    <div className="HMain">
      <div className="HBox1">
        <h1 className="HFont">To-Do</h1>
        <div className="InsideHBox1">
          <input
            type="email"
            autocomplete="off"
            name="Todo"
            className="HInput"
            placeholder="Write what todo"
          ></input>
          <button className="HButton">Submit</button>
        </div>
      </div>
      <div className="HBox2"></div>
    </div>
  );
}
