import React from "react";
import { Card } from "react-bootstrap";
import "../../assets/css/components/sobre.css";
import imagemIlustrativa from "../../assets/img/sobre.png";

function Sobre() {
  return (
    <div className="container-sobre">
      <img
        className="card-imagem__sobre"
        src={imagemIlustrativa}
        alt="Imagem ilustrativa do componente Home"
      />
      <Card className="card-sobre">
        <Card.Body>
          <Card.Title className="card-texto__sobre">Sobre mim</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sobre;
