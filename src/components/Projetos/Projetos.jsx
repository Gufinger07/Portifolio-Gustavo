import React from "react";
import { Card } from "react-bootstrap";
import "../../assets/css/components/projetos.css";
import imagem from "../../assets/img/projetoimc.png"

function Conhecimento() {
  return (
    <div className="container-projetos">
      <div className="card-conhecimento__conhecimento">
        <Card className="card-projetos__projetos" style={{ width: "25rem"}}>
          <Card.Img variant="top" src={imagem} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Conhecimento;
