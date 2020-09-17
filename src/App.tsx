import React from "react";
import "./App.css";
import SliderImage from "./components/SliderImage";
import MainImage from "./components/MainImage";
import Header from "./components/Header";
import Calculate from "./components/Calculate";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <MainImage></MainImage>
        <SliderImage></SliderImage>
        <Calculate></Calculate>
      </main>
    </div>
  );
};

export default App;
