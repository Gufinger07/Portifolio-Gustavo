import React from "react";
import { Card} from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import git from "../../assets/img/git.png"



function Versionamento() {
    return(
        <div className="grupo-conhecimentos">
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={git} alt="imagem ilustrativa git"/>
            <Card.Body className="card-corpo">
              <Card.Title>Git</Card.Title>
              
            </Card.Body>
          </Card>
    
        </div>
    )
}
        
export default Versionamento