import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This is created by Tasha Tran.{" "}
          <a
            href="https://silly-davinci-48e92a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Hosted on Netlify{" "}
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
