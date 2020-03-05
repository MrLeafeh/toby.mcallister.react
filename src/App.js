import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <header className="container-nav-bar nav-blue">
      <div className="nav-bar">
        <a href="index.html">
          <h2>Home</h2>
        </a>
        <a href="https://docs.google.com/document/d/1vV9bg_HC5QM-j_he7VWpcDRLAW8odWv6UJZXZJtLHqo/edit?usp=sharing">
          <h2>Resume</h2>
        </a>
        <a href="mailto:tlfmcallister@gmail.com?Subject=Hi%20Toby">
          <h2>E-Mail</h2>
        </a>
      </div>
    </header>
  );
}

export default App;
