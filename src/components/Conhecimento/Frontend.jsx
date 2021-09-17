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
            <Card.Img variant="top" src={html} alt="imagem ilustrativa html" />
            <Card.Body>
              <Card.Title>Html 5</Card.Title>
              <Card.Text>1 Ano de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={css} alt="imagem ilustrativa css"/>
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>1 Ano de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={javascript} alt="imagem ilustrativa javascript"/>
            <Card.Body>
              <Card.Title>JavasCript</Card.Title>
              <Card.Text>1 Ano de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={react} alt="imagem ilustrativa react"/>
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>6 Mêses de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={jquery} alt="imagem ilustrativa jquery"/>
            <Card.Body>
              <Card.Title>jQuery</Card.Title>
              <Card.Text>8 Mêses de experiência</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={bootstrap} alt="imagem ilustrativa bootstrap"/>
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
              <Card.Text>10 Mêses de experiência</Card.Text>
            </Card.Body>
          </Card>
    
        </div>
    )
}
        
export default Frontend