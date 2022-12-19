import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../assets/css/components/navbar.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" variant="dark" fixed="top">
      <Navbar.Brand className="nav-titulo">Gustavo Finger</Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="nav-hamburger"
      />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="nav">
          <Nav.Item className="nav-itens">
            <Link to="container-sobre" smooth={true} duration={1}>
              <Nav.Link active>Sobre Mim</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Link
              to="card-conhecimento__conhecimento"
              smooth={true}
              duration={1}
            >
              <Nav.Link active>Conhecimentos</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Link to="container-projetos" smooth={true} duration={1}>
              <Nav.Link className="nav-itens__item" active>
                Projetos
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-itens">
            <Link to="card-contato" smooth={true} duration={1}>
              {" "}
              <Nav.Link active>Contato</Nav.Link>{" "}
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
