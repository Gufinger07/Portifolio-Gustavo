import React from "react";
import { Card} from "react-bootstrap";
import "../../assets/css/components/conhecimento.css";
import mysql from "../../assets/img/mysql.png"



function BancoDeDados() {
    return(
        <div className="grupo-conhecimentos">
          <Card className="card-conhecimento">
            <Card.Img className="card-conhecimento-top" variant="top" src={mysql} alt="imagem ilustrativa mysql"/>
            <Card.Body className="card-corpo">
              <Card.Title>MySql</Card.Title>
           
            </Card.Body>
          </Card>
    
        </div>
    )
}
        
export default BancoDeDados