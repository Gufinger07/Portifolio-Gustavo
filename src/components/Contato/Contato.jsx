import React from "react";
import { Card } from "react-bootstrap";
import "../../assets/css/components/contato.css";

function Contato() {
  return (
    <>
      <div className="card-contato">
        <Card.Title className="card-contato__titulo">Contato</Card.Title>
        <p className="card-contato__texto">Entre em Contato Comigo (◕‿◕)</p>
      </div>
      <Card.Body className="card-contato__corpo">
        <p className="card-contato__texto">Email: gusti.cf@gmail.com</p>
        <p className="card-contato__texto">Telefone: (61) 98226-9250</p>
      </Card.Body>
      <div className="card-contato__rodape">
        <p className="card-contato__texto">
          Feito por Gustavo Coelho Finger
        </p>
      </div>
    </>
  );
}

export default Contato;
