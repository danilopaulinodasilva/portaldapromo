import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="px-md-5">
        <Navbar.Brand href="#home">
          <Image
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            width={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-3">
            <Nav.Link href="#home">Categorias</Nav.Link>
            <Nav.Link href="#link">Marcas</Nav.Link>
            <Nav.Link href="#link">Especiais</Nav.Link>
            <Nav.Link href="#link">Sobre nós</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
