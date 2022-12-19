import React from "react";
import { Card} from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import python from "../../assets/img/python.png"
import node from "../../assets/img/node.png"
import java from "../../assets/img/java.png"


function Backend() {
    return(
        <div className="grupo-conhecimentos">
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={python} alt="imagem ilustrativa python"/>
            <Card.Body className="card-corpo">
              <Card.Title>Python</Card.Title>
             
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={node} alt="imagem ilustrativa node-js"/>
            <Card.Body className="card-corpo">
              <Card.Title>Node-Js</Card.Title>
             
            </Card.Body>
          </Card>
          <Card className="card-conhecimento">
            <Card.Img variant="top" src={java} alt="imagem ilustrativa java"/>
            <Card.Body className="card-corpo">
              <Card.Title>Java</Card.Title>
              
            </Card.Body>
          </Card>
    
        </div>
    )
}
        
export default Backend