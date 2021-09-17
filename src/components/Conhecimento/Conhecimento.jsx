import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import javascript from "../../assets/img/javascript.png";
import react from "../../assets/img/react.png";
import jquery from "../../assets/img/jquery.png";
import bootstrap from "../../assets/img/bootstrap.png"

function Conhecimento() {
  return (
    <>
      <div className="card-conhecimento__conhecimento">
        <Card.Title className="card-conhecimento__titulo">
          Conhecimentos
        </Card.Title>
      </div>
      <div className="container-conhecimento">
        <div className="grupo-botoes">
          <Button
            variant="outline-danger"
            className="custom-button"
            id="button-addon1"
          >
            Front-End
          </Button>
          <Button
            variant="outline-danger"
            className="custom-button"
            id="button-addon1"
          >
            Back-End
          </Button>
          <Button
            variant="outline-danger"
            className="custom-button"
            id="button-addon1"
          >
            Banco de Dados
          </Button>
          <Button
            variant="outline-danger"
            className="custom-button"
            id="button-addon1"
          >
            Versionamento
          </Button>
        </div>
        <div className="grupo-conhecimentos">
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={html} />
            <Card.Body>
              <Card.Title>Html 5</Card.Title>
              <Card.Text>1 ano de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={css} />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>1 ano de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={javascript} />
            <Card.Body>
              <Card.Title>JavasCript</Card.Title>
              <Card.Text>1 ano de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={react} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>6 Mêses de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={jquery} />
            <Card.Body>
              <Card.Title>jQuery</Card.Title>
              <Card.Text>8 Mêses de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={bootstrap} />
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
              <Card.Text>10 Mêses de experiência</Card.Text>
            </Card.Body>
          </Card>
          
        </div>
      </div>
    </>
  );
}

export default Conhecimento;
