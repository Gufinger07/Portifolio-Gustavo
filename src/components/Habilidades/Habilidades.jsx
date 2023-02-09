import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import api from "../../assets/img/api.svg"
import resp from "../../assets/img/resp.svg"
import ux from "../../assets/img/ux.svg"
import acce from "../../assets/img/acce.svg"
import web from "../../assets/img/web.svg"
import Slide from 'react-reveal/Slide';

function Habilidades() {
  

  return (
    <>
    <Slide right>
    <div className="card-conhecimento__conhecimento">
        <Card.Title className="card-conhecimento__titulo">
          Conhecimentos
        </Card.Title>
      </div>
      <div className="container-conhecimento">
        <div className="cards-habilidade">
            <div className="card-habilidades">
            <img className="img-habilidades" src={api} alt="" />
                <Card.Text className="card-sobre__paragrafo texto-card">
                    Integração entre o Front end e o Back end nas aplicações web
                </Card.Text>
            </div>
            <div className="card-habilidades">
            <img className="img-habilidades" src={resp} alt="" />
                <Card.Text className="card-sobre__paragrafo texto-card">
                    Design responsivo para diversas telas
                </Card.Text>
            </div>
            <div className="card-habilidades">
            <img className="img-habilidades" src={ux} alt="" />
                <Card.Text className="card-sobre__paragrafo texto-card">
                    Noções basicas em User Experience(UX Design)
                </Card.Text>
            </div>
            <div className="card-habilidades">
            <img className="img-habilidades" src={acce} alt="" />
                <Card.Text className="card-sobre__paragrafo texto-card">
                    Conhecimentos em Acessibilidade Web
                </Card.Text>
            </div>
            <div className="card-habilidades">
            <img className="img-habilidades" src={web} alt="" />
                <Card.Text className="card-sobre__paragrafo texto-card">
                    Entendimento sobre SEO(Search Engine Optimization)
                </Card.Text>
            </div>
        </div>
       
         
          
          
        
     
        
      </div>
        </Slide>
    
     
    </>
  );
}

export default Habilidades;