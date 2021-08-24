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
            <Card.Text className="card-corpo__texto">1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">CSS</Card.Title>
            <Card.Text className="card-corpo__texto">1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">Javascript</Card.Title>
            <Card.Text className="card-corpo__texto">1 Ano de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">Bootstrap</Card.Title>
            <Card.Text className="card-corpo__texto">10 Mêses de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">Jquery</Card.Title>
            <Card.Text className="card-corpo__texto">8 Mêses de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">React-Js</Card.Title>
            <Card.Text className="card-corpo__texto">6 Mêses de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">Node-Js</Card.Title>
            <Card.Text className="card-corpo__texto">3 Mêses de experiência</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-conhecimento">
          <Card.Body className="card-corpo">
            <Card.Title className="card-corpo__titulo">MySql</Card.Title>
            <Card.Text className="card-corpo__texto">10 Mêses de experiência</Card.Text>
          </Card.Body>
        </Card>
      </div>
      
        
    </>
  );
}

export default Conhecimento;
