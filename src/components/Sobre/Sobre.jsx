import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/sobre.css";
import imagemIlustrativa from "../../assets/img/compu.png";

function Sobre() {
  return (
    <div className="container-sobre">
      <img
        className="card-imagem__sobre"
        src={imagemIlustrativa}
        alt="Imagem ilustrativa do componente Home"
      />
      <Card className="card-sobre">
        <Card.Body className="card-sobre__cartao">
          <Card.Title className="card-sobre__titulo">Sobre mim</Card.Title>
          <Card.Text className="card-sobre__paragrafo">
            Meu Nome é Gustavo, tenho 20 anos e moro em Brasília-DF. Hoje estou
            cursando Ciência da computação, atualmente no 6º semestre. também
            estudo bastante por conta própria a fim de aprender novas
            tecnologias. <br />
          </Card.Text>
          <Card.Text className="card-sobre__paragrafo">
            Começei a focar como desenvolvedor Front-End em 2020, desde então
            consegui aprender bastante e desenvolver diversos projetos pessoais.
          </Card.Text>
          <Button size="lg" className="card-botao card-botao__curriculo">
            Currículo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Sobre;
