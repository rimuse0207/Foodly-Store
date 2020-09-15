import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import MainImage from "./components/MainImage";

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
        <Menu></Menu>
      </header>
      <main>
        <MainImage></MainImage>
      </main>
    </div>
  );
}

export default App;
