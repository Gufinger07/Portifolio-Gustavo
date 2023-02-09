import React from "react";
import { Card, Button } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
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
import Modals from "./Modal";
import { useState } from "react";

function Conhecimento() {

  const [modalShow, setModalShow] = React.useState(false);

  const [titulo, setTitulo] = useState("")

  const [resumo, setResumo] = useState("")

  const [tecnologias, setTecnologias] = useState("")

  const [git, setGit] = useState("")

  const [url, setUrl] = useState("")

  return (
    
    <>
    
    <Modals 
    show={modalShow}
    onHide={() => setModalShow(false)}
    titulo={titulo}
    resumo={resumo}
    tecnologias={tecnologias}
    git={git}
    url={url}
    />
      <div className="container-projetos">
        
        <div className="card-projetos">
          <Card.Title className="card-projetos__titulo">Projetos</Card.Title>
        </div>
        <div className="card-display">
        <Flip left>
        <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Agendamento de consultas")
            setResumo("Trabalho de conclusão de curso: Aplicação web focada em agendamento de consultas.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Python, Django, Docker, React-bootstrap, Vercel")
            setGit("https://gitlab.com/tcc58/front/-/commit/1ab8b85c8a94fa51ce3e5db0903e839517b9e4e8")
            setUrl("http://34.125.30.179")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemTcc} />
            <Card.Title className="card-projetos__title">
                Agendamento de consultas
              </Card.Title>
            
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Mapeamento de lojas de Moda")
            setResumo("Projeto desenvolvido em parceria com o Sebrae para mapear as lojas de moda no DF.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Python, Django, Docker, Material-UI, Vercel")
            setGit("https://github.com/Gufinger07/Sebraelab")
            setUrl("https://sebraelab.vercel.app/")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemSeb} />
            <Card.Title className="card-projetos__title">
                Mapeamento de lojas de Moda
              </Card.Title>
            
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("G-Estoque")
            setResumo("Projeto desenvoddlvido em Jquery com o intúito de fazer um gerenciamento de estoque dinamicamente.")
            setTecnologias("HTML, CSS, JavaScript, Jquery, Python, Django, Docker, Bootstrap")
            setGit("https://github.com/Gufinger07/G_Estoque")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemGesto} />
            <Card.Title className="card-projetos__title">
                G-Estoque
              </Card.Title>
            
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Calculador de IMC")
            setResumo("Projeto desenvolvido em React com intúito de calcular o IMC do usuário.")
            setTecnologias("HTML, CSS, JavaScript, React-Js")
            setGit("https://github.com/Gufinger07/CalcularImc")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemImc} />
            <Card.Title className="card-projetos__title">
                Calculador de IMC
              </Card.Title>
           
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Signo Mania")
            setResumo("Projeto desenvolvido em React para informar o usuário à respeito dos Signos com rotas aninhadas.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Material-UI")
            setGit("https://github.com/Gufinger07/Signo-Router")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemSigno} />
            <Card.Title className="card-projetos__title">
                Signo Mania
              </Card.Title>
            
          </Card>
         
          
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Formulário De Cadastro")
            setResumo("Projeto desenvolvido em React e Material-Ui que simula um formulário com várias etapas e validações.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Material-UI")
            setGit("https://github.com/Gufinger07/Formulario-React")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemForm} />
            <Card.Title className="card-projetos__title">
                Formulário De Cadastro
              </Card.Title>
            
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Fazedor de Notas")
            setResumo("Projeto desenvolvido em React que pode criar notas dinamicamente com várias categorias.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Material-UI")
            setGit("https://github.com/Gufinger07/FazedorDeNotas")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemNote} />
            <Card.Title className="card-projetos__title">
              Fazedor de Notas
              </Card.Title>
          
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Game Typer")
            setResumo("Projeto desenvolvido em JQuery cujo é um mini-game de digitação.")
            setTecnologias("HTML, CSS, JavaScript, Jquery")
            setGit("https://github.com/Gufinger07/Projeto_digitacao_game")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemType} />
            <Card.Title className="card-projetos__title">
                Game Typer
              </Card.Title>
           
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Graph Maker")
            setResumo("Projeto desenvolvido em React e Material-Ui que consegue criar gráficos de pizza dinamicamente.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Google Charts")
            setGit("https://github.com/Gufinger07/Graph-Maker")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemGraph} />
            <Card.Title className="card-projetos__title">
                Graph Maker
            </Card.Title>
            
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("Quizz Gustavo")
            setResumo("Um Quizz desenvolvido em React como várias etapas e salvando o progresso do usuário, com o resultado no final.")
            setTecnologias("HTML, CSS, JavaScript, React-Js, Material-UI, Vercel")
            setGit("https://github.com/Gufinger07/Quizz-Gustavo")
            setUrl("https://quizz-gustavo-mu.vercel.app/")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemQuizz} />
            <Card.Title className="card-projetos__title">
                Quizz Gustavo
            </Card.Title>
           
          </Card>
          <Card className="card-projetos__projetospar" onClick={() => {
            setTitulo("GF Bank")
            setResumo("Projeto desenvolvido em React que simula o comportamento de um banco digital, com um banco de dados integrado.")
            setTecnologias("HTML, CSS, JavaScript, React-Js")
            setGit("https://github.com/Gufinger07/Banco-Com-React")
            setUrl("")
            setModalShow(true)
          }}>
            <Card.Img variant="top" src={imagemBanco} />
            <Card.Title className="card-projetos__title">
                GF Bank
            </Card.Title>
            
          </Card>
        </Flip>
          
        </div>
      </div>
    </>
  );
}

export default Conhecimento;
