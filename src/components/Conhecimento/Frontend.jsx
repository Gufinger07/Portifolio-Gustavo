import React from "react";
import { Card} from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import javascript from "../../assets/img/javascript.png";
import react from "../../assets/img/react.png";
import jquery from "../../assets/img/jquery.png";
import bootstrap from "../../assets/img/bootstrap.png"


function Frontend() {
    return(
        <div className="grupo-conhecimentos">
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={html} alt="imagem ilustrativa html" />
            <Card.Body className="card-corpo"> 
              <Card.Title>Html 5</Card.Title>
              
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={css} alt="imagem ilustrativa css"/>
            <Card.Body className="card-corpo">
              <Card.Title>CSS</Card.Title>
              
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={javascript} alt="imagem ilustrativa javascript"/>
            <Card.Body className="card-corpo">
              <Card.Title>JavaScript</Card.Title>
              
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={react} alt="imagem ilustrativa react"/>
            <Card.Body className="card-corpo">
              <Card.Title>React Js</Card.Title>
              
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={jquery} alt="imagem ilustrativa jquery"/>
            <Card.Body className="card-corpo">
              <Card.Title>jQuery</Card.Title>
              
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={bootstrap} alt="imagem ilustrativa bootstrap"/>
            <Card.Body className="card-corpo">
              <Card.Title>Bootstrap</Card.Title>
             
            </Card.Body>
          </Card>
    
        </div>
    )
}
        
export default Frontend