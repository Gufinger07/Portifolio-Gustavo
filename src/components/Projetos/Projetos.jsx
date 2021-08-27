import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/projetos.css";
import imagemImc from "../../assets/img/projetoimc.png";
import imagemSigno from "../../assets/img/projetosigno.png"
import imagemLdp from "../../assets/img/projetoldp.png"
import imagemGerador from "../../assets/img/projetogerador.png"
import imagemForm from "../../assets/img/projetoform.png"
import imagemNote from "../../assets/img/projetonote.png"
import imagemType from "../../assets/img/projetotype.png"
import imagemGraph from "../../assets/img/projetograph.png"

function Conhecimento() {
  return (
    <>
      <div className="container-projetos">
        <div className="card-projetos">
          <Card.Title className="card-projetos__titulo">Projetos</Card.Title>
        </div>
        <div className="card-display">
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemImc} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Calculador de IMC</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React com o intúito de informar o
                usuário à respeito de IMC e calcular o mesmo dinamicamente.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemSigno} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Signo Mania</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito dos Signo trabalhando com rotas aninhadas.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemLdp} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Ldp-Router</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
            </Card>
            <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemGerador} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Ldp-Router</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemForm} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Ldp-Router</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemNote} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Ldp-Router</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemType} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Ldp-Router</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemGraph} />
            <Card.Body className="card-projetos__corpo">
              <Card.Title className="card-projetos__title">Ldp-Router</Card.Title>
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                <Button className="botao-projetos__vermais">View More</Button>
                <Button className="botao-projetos__git" variant="dark">View Github</Button>
              </div>
            </Card.Body>
          </Card>
          </div>
      </div>
    </>
  );
}

export default Conhecimento;
