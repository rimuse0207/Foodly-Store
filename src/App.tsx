import React from "react";

import "./App.css";

import MainImage from "./components/MainImage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <MainImage></MainImage>
      </main>
    </div>
  );
}

export default App;
