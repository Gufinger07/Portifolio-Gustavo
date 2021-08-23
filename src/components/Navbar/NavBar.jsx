import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import "../../assets/css/components/navbar.css";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" variant="dark" fixed="top">
    <Navbar.Brand className="nav-titulo" href="#home">Portifólio</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-hamburger"/>
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav>
          <Nav.Item className="nav-itens">
            <Nav.Link active href="/home">Sobre Mim</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Nav.Link active href="/conhecimentos">Conhecimentos</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Nav.Link active href="/projetos">Projetos</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Nav.Link active href="/contato">Contato</Nav.Link>
          </Nav.Item>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
