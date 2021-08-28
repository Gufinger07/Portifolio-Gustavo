import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/projetos.css";
import imagemImc from "../../assets/img/projetoimc.png";
import imagemSigno from "../../assets/img/projetosigno.png";
import imagemLdp from "../../assets/img/projetoldp.png";
import imagemGerador from "../../assets/img/projetogerador.png";
import imagemForm from "../../assets/img/projetoform.png";
import imagemNote from "../../assets/img/projetonote.png";
import imagemType from "../../assets/img/projetotype.png";
import imagemGraph from "../../assets/img/projetograph.png";

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
            <Card.Title className="card-projetos__title">
                Calculador de IMC
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React com o intúito de informar o
                usuário à respeito de IMC e calcular o mesmo dinamicamente.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
               

                <Button target="_blank" href="https://github.com/Gufinger07/CalcularImc" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemSigno} />
            <Card.Title className="card-projetos__title">
                Signo Mania
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito dos Signo trabalhando com rotas aninhadas.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/Signo-Router" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemLdp} />
            <Card.Title className="card-projetos__title">
                Ldp-Router
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui para informar o
                usuário à respeito de alguns frameworks Front-End e Back-End.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/LDP-Router" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemGerador} />
            <Card.Title className="card-projetos__title">
                Gerador de Convites
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em Html, Css e Javascript puro, com o
                objetivo de reproduzir convites dinamicamente.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/Projeto-Gerador-de-Convites" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemForm} />
            <Card.Title className="card-projetos__title">
                Formulário De Cadastro
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui que simula um
                formulário com várias etapas e algumas validações.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
              
                <Button target="_blank" href="https://github.com/Gufinger07/Formulario-React" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemNote} />
            <Card.Title className="card-projetos__title">
                Note Maker
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
             
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React que pode criar notas dinamicamente
                com várias categorias.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/FazedorDeNotas" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemType} />
            <Card.Title className="card-projetos__title">
                Game Typer
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em JQuery cujo é um mini-game de digitação.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/Projeto_digitacao_game" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemGraph} />
            <Card.Title className="card-projetos__title">
                Graph Maker
            </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React e Material-Ui que consegue criar
                gráficos de pizza dinamicamente.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/Graph-Maker" className="botao-projetos__git" variant="dark">
                  View Github
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Conhecimento;
