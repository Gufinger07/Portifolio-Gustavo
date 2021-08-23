import React from "react";
import { Card } from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";

function Conhecimento() {
  return (
    <>
      <div className="card-conhecimento__conhecimento">
        <Card.Title className="card-conhecimento__titulo">
          Conhecimentos
        </Card.Title>
      </div>
      <div className="container-conhecimento">
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="container-conhecimento">
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text className="card-corpo__texto">1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">HTML 5</Card.Title>
            <Card.Text>1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Conhecimento;
