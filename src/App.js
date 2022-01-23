import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This is created by{" "}
          <a href="#" target="_blank" rel="noreferrer">
            Tasha Tran{" "}
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/tashatran/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
