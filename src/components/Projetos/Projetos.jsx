import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/projetos.css";
import imagem from "../../assets/img/projetoimc.png";

function Conhecimento() {
  return (
    <>
      <div className="container-projetos">
        <div className="card-projetos">
          <Card.Title className="card-projetos__titulo">Projetos</Card.Title>
        </div>
        <div cla></div>
        <Card className="card-projetos__projetos">
          <Card.Img variant="top" src={imagem} />
          <Card.Body className="card-projetos__corpo">
            <Card.Title>Calculador de IMC</Card.Title>
            <Card.Text className="card-projetos__texto">
              Projeto desenvolvido em React e Material-Ui para informar o
              usuário à respeito de IMC e calcular o mesmo.
            </Card.Text>
            <div className="card-projetos__grupobotoes">
              <Button variant="light">View More</Button>
              <Button variant="dark">View Github</Button>
            </div>
          </Card.Body>
        </Card>
        <Card className="card-projetos__projetos">
          <Card.Img variant="top" src={imagem} />
          <Card.Body className="card-projetos__corpo">
            <Card.Title>Calculador de IMC</Card.Title>
            <Card.Text className="card-projetos__texto">
              Projeto desenvolvido em React e Material-Ui para informar o
              usuário à respeito de IMC e calcular o mesmo.
            </Card.Text>
            <div className="card-projetos__grupobotoes">
              <Button variant="light">View More</Button>
              <Button variant="dark">View Github</Button>
            </div>
          </Card.Body>
        </Card>
        
      </div>
    </>
  );
}

export default Conhecimento;
