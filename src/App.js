import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This is created by{" "}
          <a
            href="https://nervous-nightingale-f156b1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
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
