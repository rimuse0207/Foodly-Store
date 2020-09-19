import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Home, Login, SignUp, HomePage2, FoodlyStore, Products } from "./pages";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
const App: React.FC = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <Menu></Menu>
      <Route exact path="/" component={Home}></Route>
      <Route path="/Foodly-Store" component={FoodlyStore}></Route>
      <Route path="/Homepage2" component={HomePage2}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
      <Route path="/Products" component={Products}></Route>
      {/* <Header></Header> */}
      <main></main>
    </div>
  );
};

export default App;
