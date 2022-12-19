import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useState } from "react";
import "../../assets/css/components/contato.css";
import { Link } from "react-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import celular from "../../assets/img/contato-telefone.png";
import email from "../../assets/img/contato-email.png";
import website from "../../assets/img/contato-website.png";

function Contato() {
  const [mensagemSpan, setMensagem] = useState("");

  return (
    <>
      <div className="card-contato">
        <Card.Title className="card-contato__titulo">Contato</Card.Title>
        <p className="card-contato__texto">Entre em Contato Comigo (◕‿◕)</p>
      </div>
      <CardGroup className="card-contato__grupo">
        <Card className="card-contato__card">
          <Card.Img className="card-contato__imagem" src={email} alt="imagem ilustrativa email"/>

          <Card.Title className="card-card__titulo">Email</Card.Title>
          <Card.Text className="card-card__texto">
            <CopyToClipboard text={"gusti.cf@gmail.com"}>
              <Button
                className="custom-button"
                onClick={() => setMensagem("Link copiado !!")}
                variant="outline-primary"
              >
                gusti.cf@gmail.com
              </Button>
            </CopyToClipboard>
          </Card.Text>
          <span className="card-card-span">{mensagemSpan}</span>
        </Card>
        <Card className="card-contato__card">
          <Card.Img className="card-contato__imagem" src={celular} alt="imagem ilustrativa telefone"/>
          <Card.Title className="card-card__titulo">
            Telefone/WhatsApp
          </Card.Title>

          <Card.Text className="card-card__texto">
            <Button
              className="custom-button"
              target="_blank"
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5561982269250"
              variant="outline-success"
            >
              61982269250
            </Button>
          </Card.Text>
        </Card>
        <Card className="card-contato__card">
          <Card.Img className="card-contato__imagem" src={website} alt="imagem ilustrativa website"/>

          <Card.Title className="card-card__titulo">WebSite</Card.Title>
          <Card.Text className="card-card__texto">
            <Link to="root" smooth={true} duration={1000}>
              <Button className="custom-button" variant="outline-info">
                Portifólio
              </Button>{" "}
            </Link>
          </Card.Text>
        </Card>
      </CardGroup>
      <div className="card-contato__rodape">
        <p className="card-contato__texto">Feito por Gustavo Coelho Finger</p>
      </div>
    </>
  );
}

export default Contato;
