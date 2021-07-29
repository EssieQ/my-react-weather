import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather cityName="London" />
        <footer>
          This project is created by Esther Cauven and is{" "}
          <a href="https://github.com/EssieQ/my-react-weather" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
