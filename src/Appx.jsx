import React from "react";
import "./assets/css/base/reset.css";
import "./assets/css/base/variaveis.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Sobre from "./components/Sobre/Sobre"

function Appx() {
  return (
    <>
      <NavBar />
      <Home />
      <Sobre />
    </>
  );
}
export default Appx;
