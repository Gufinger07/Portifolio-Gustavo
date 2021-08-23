import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/home.css";
import imagemIlustrativa from "../../assets/img/lap.png"


function Home() {
  return (
    <div className="container-home">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-texto">Olá, meu nome é Gustavo Finger e atuo como Desenvolvedor Front-End</Card.Title>
          <Button size="lg" className="card-botao card-botao__git" variant="dark"> Github</Button>
          <Button size="lg" className="card-botao card-botao__linkedin" variant="primary">Linkedin</Button>
          <Button size="lg" className="card-botao card-botao__instagram">Instagram</Button>
        </Card.Body>
      </Card>
      <img className="card-imagem__home" src={imagemIlustrativa} alt="Imagem ilustrativa do componente Home"/>
    </div>
  );
}

export default Home;
