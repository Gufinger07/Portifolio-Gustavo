import React from "react";
import { Card, Button } from "react-bootstrap";
import Flip from 'react-reveal/Flip';
import "../../assets/css/components/sobre.css";
import imagemIlustrativa from "../../assets/img/img2.png";
import pdf from "./cur.pdf";
function Sobre() {
  return (
    <div className="container-sobre">
      <Flip top>
      <img
        className="card-imagem__sobre"
        src={imagemIlustrativa}
        alt="Imagem ilustrativa do componente sobre"
      />
      <Card className="card-sobre">
        <Card.Body className="card-sobre__cartao">
          <Card.Title className="card-sobre__titulo">Sobre mim</Card.Title>
          <Card.Text className="card-sobre__paragrafo">
            Meu Nome é Gustavo, tenho 21 anos e moro em Brasília-DF. Hoje estou
            cursando Ciência da computação, atualmente no 8º semestre. Também
            estudo bastante por conta própria a fim de aprender novas
            tecnologias e implementar projetos pessoais. <br />
          </Card.Text>
          
          <Card.Text className="card-sobre__paragrafo">
            Começei a focar como desenvolvedor Front-End em 2020, desde então
            consegui aprender bastante e desenvolver diversos projetos pessoais.
          </Card.Text>
          <Button
            href={pdf}
            target="_blank"
            size="lg"
            className="card-botao card-botao__curriculo custom-button"
          >
            Currículo
          </Button>
        </Card.Body>
      </Card>
        </Flip>
      
    </div>
  );
}

export default Sobre;
