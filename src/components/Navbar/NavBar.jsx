import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../assets/css/components/navbar.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" variant="dark" fixed="top">
      <Link to="container-home" smooth={true} duration={1000}>
        <Navbar.Brand className="nav-titulo">
          Portifólio
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="nav-hamburger"
      />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Item className="nav-itens">
            <Link to="container-sobre" smooth={true} duration={1000}>
    
              <Nav.Link active>Sobre Mim</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Link
              to="card-conhecimento__conhecimento"
              smooth={true}
              duration={1000}
            >
              
              <Nav.Link active>Conhecimentos</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Link to="container-projetos" smooth={true} duration={1000}>
              <Nav.Link active>Projetos</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
          <Link to="card-contato" smooth={true} duration={1000}> <Nav.Link active>Contato</Nav.Link> </Link>
            
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
