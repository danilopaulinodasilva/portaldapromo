import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { getPrimaryMenu } from "../graphql/wordpress";

export function Menu() {
  const [primaryMenu, setPrimaryMenu] = useState({
    menu: { menuItems: { edges: [] } },
  });

  useEffect(() => {
    async function fetchPrimaryMenu() {
      const menu = await getPrimaryMenu();
      setPrimaryMenu(menu);
    }

    fetchPrimaryMenu();
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="px-md-5">
        <Navbar.Brand href="/">
          <Image src="guiadapromo_logo.svg" height={40} />
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
