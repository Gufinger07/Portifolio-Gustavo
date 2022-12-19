import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import Frontend from "../Conhecimento/Frontend";
import Backend from "../Conhecimento/Backend";
import BancoDeDados from "../Conhecimento/BancoDeDados";
import Versionamento from "../Conhecimento/Versionamento";

function Conhecimento() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [botaoAtivo, setBotaoAtivo] = useState(["botao-ativo","none","none","none"])

  

  const etapas = [
    <Frontend />,
    <Backend />,
    <BancoDeDados />,
    <Versionamento />,
  ];

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
            onClick={() => {
              setBotaoAtivo(["botao-ativo","none","none","none"])
              setEtapaAtual(0)
            }}
            variant="outline-danger"
            className={`custom-button botao-conhecimento ${botaoAtivo[0]}`}
            id="button-addon1"
          >
            Front-End
          </Button>
          <Button
            
            onClick={() => {
              setBotaoAtivo(["none","botao-ativo","none","none"])
              setEtapaAtual(1)
            }}
            variant="outline-danger"
            className={`custom-button botao-conhecimento ${botaoAtivo[1]}`}
            id="button-addon1"
          >
            Back-End
          </Button>
          <Button
            onClick={() => {
              setBotaoAtivo(["none","none","botao-ativo","none"])
              setEtapaAtual(2)
            }}
            variant="outline-danger"
            className={`custom-button botao-conhecimento ${botaoAtivo[2]}`}
            id="button-addon1"
          >
            Banco de Dados
          </Button>
          <Button
            onClick={() => {
              setBotaoAtivo(["none","none","none","botao-ativo"])
              setEtapaAtual(3)
            }}
            variant="outline-danger"
            className={`custom-button botao-conhecimento ${botaoAtivo[3]}`}
            id="button-addon1"
          >
            Versionamento
          </Button>
        </div>
        {etapas[etapaAtual]}
      </div>
    </>
  );
}

export default Conhecimento;
