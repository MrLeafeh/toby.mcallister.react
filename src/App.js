import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
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
      <div className="image-container">
        <div className="page-header">
          <div className="header-name-text">
            <h1>
              <b>Toby McAllister</b>
            </h1>
            <h2 className="h2-weight">Lorem ipsum</h2>
          </div>
        </div>
      </div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div>
              <h1>TL;DR</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum maiores tenetur voluptate temporibus repellendus, ex
                assumenda neque veritatis nemo suscipit qui inventore
                accusantium illum, labore ut, expedita earum asperiores amet!
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
