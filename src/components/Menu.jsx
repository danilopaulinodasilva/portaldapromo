import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { getPrimaryMenu } from "../graphql/wordpress";

const primaryMenu = async () => {
  return await getPrimaryMenu();
};

export function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="px-md-5">
        <Navbar.Brand href="/">
          <Image
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            width={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-3">
            {primaryMenu.menu.menuItems.edges.map((item) => (
              <Nav.Link key={item.node.uri} href={item.node.uri}>
                {item.node.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
