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
import imagemGraph from "../../assets/img/gra.png";
import imagemQuizz from "../../assets/img/projetoquizz.png"
import imagemBanco from "../../assets/img/projetobanco.png"
import imagemTcc from "../../assets/img/tcc.png"
import imagemGesto from "../../assets/img/gest.png"
import imagemSeb from "../../assets/img/seb.png"

function Conhecimento() {
  return (
    <>
      <div className="container-projetos">
        <div className="card-projetos">
          <Card.Title className="card-projetos__titulo">Projetos</Card.Title>
        </div>
        <div className="card-display">
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemTcc} />
            <Card.Title className="card-projetos__title">
                Agendamento de consultas
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Trabalho de conclusão de curso: Aplicação web focada em agendamento de consultas.
                Link para acessar 
              </Card.Text>
              <div className="card-projetos__grupobotoes">
               

                <Button target="_blank" href="https://gitlab.com/tcc58/front" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitLab
                </Button>
                <Button target="_blank" href="http://34.125.30.179/" className="botao-projetos__git custom-button" variant="dark">
                Ver em Produção
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemSeb} />
            <Card.Title className="card-projetos__title">
                Agendamento de consultas
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em parceria com o Sebrae para mapear as lojas de moda no DF.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
               

                <Button target="_blank" href="https://github.com/Gufinger07/Sebraelab" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
                </Button>
                <Button target="_blank" href="https://sebraelab.vercel.app/" className="botao-projetos__git custom-button" variant="dark">
                Ver em Produção
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemGesto} />
            <Card.Title className="card-projetos__title">
                Agendamento de consultas
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em Jquey com o intúito de informar de
                fazer um gerenciamento de estoque
                
              </Card.Text>
              <div className="card-projetos__grupobotoes">
               

                <Button target="_blank" href="https://github.com/Gufinger07/CalcularImc" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
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
               

                <Button target="_blank" href="https://github.com/Gufinger07/CalcularImc" className="botao-projetos__git custom-button" >
                Ver no GitHub
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
                
                <Button target="_blank" href="https://github.com/Gufinger07/Signo-Router" className="botao-projetos__git custom-button" variant="dark">
                  Ver no GitHub
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
              
                <Button custom-button target="_blank" href="https://github.com/Gufinger07/Formulario-React" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemNote} />
            <Card.Title className="card-projetos__title">
              Fazedor de Notas
              </Card.Title>
            <Card.Body className="card-projetos__corpo">
             
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React que pode criar notas dinamicamente
                com várias categorias.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button custom-button target="_blank" href="https://github.com/Gufinger07/FazedorDeNotas" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
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
                
                <Button custom-button target="_blank" href="https://github.com/Gufinger07/Projeto_digitacao_game" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
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
                
                <Button target="_blank" href="https://github.com/Gufinger07/Graph-Maker" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemQuizz} />
            <Card.Title className="card-projetos__title">
                Quizz Gustavo
            </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Um Quizz desenvolvido em React como várias etapas e salvando o progresso do usuário, com o resultado no final.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/Quizz-Gustavo" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="card-projetos__projetospar">
            <Card.Img variant="top" src={imagemBanco} />
            <Card.Title className="card-projetos__title">
                GF Bank
            </Card.Title>
            <Card.Body className="card-projetos__corpo">
              
              <Card.Text className="card-projetos__texto">
                Projeto desenvolvido em React que simula o comportamento de um banco digital, com um banco de dados integrado.
              </Card.Text>
              <div className="card-projetos__grupobotoes">
                
                <Button target="_blank" href="https://github.com/Gufinger07/Banco-Com-React" className="botao-projetos__git custom-button" variant="dark">
                Ver no GitHub
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
