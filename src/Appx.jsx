import React from "react";
import "./assets/css/base/base.css";
import "./assets/css/base/reset.css";
import "./assets/css/base/variaveis.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Sobre from "./components/Sobre/Sobre"
import Conhecimento from "./components/Conhecimento/Conhecimento"
import Projetos from "./components/Projetos/Projetos"
import Contato from "./components/Contato/Contato"
import Habilidades from "./components/Habilidades/Habilidades";


function Appx() {
  return (
    <>
      <NavBar />
      <Home />
      <Sobre />
      <Conhecimento />
      <Habilidades />
      <Projetos />
      <Contato />
      
     
    </>
  );
}
export default Appx;
