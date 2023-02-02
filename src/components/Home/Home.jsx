import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/home.css";
import imagemIlustrativa from "../../assets/img/lap.png";

function Home() {
  return (
    <div className="container-home">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-texto">
            Oi, me chamo Gustavo Finger e atuo precipuamente como Desenvolvedor Front-End
            <span className="span"></span>
          </Card.Title>
          <Button
            target="_blank"
            href="https://github.com/Gufinger07"
            size="lg"
            className="card-botao card-botao__git custom-button"
            variant="dark"
          >
            {" "}
            Github
          </Button>
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/gustavo-finger-dev/"
            size="lg"
            className="card-botao card-botao__linkedin custom-button"
            variant="primary"
          >
            Linkedin
          </Button>
          <Button
            target="_blank"
            href="https://www.instagram.com/gustavo_cfinger/?hl=pt-br"
            size="lg"
            className="card-botao card-botao__instagram custom-button"
          >
            Instagram
          </Button>
        </Card.Body>
      </Card>
      <img
        className="card-imagem__home"
        src={imagemIlustrativa}
        alt="Imagem ilustrativa do componente Home"
      />
    </div>
  );
}

export default Home;
