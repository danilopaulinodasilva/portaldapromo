import { Container, Row, Col, Nav } from "react-bootstrap";

export function Topbar() {
  return (
    <Container fluid>
      <Row>
        <Col
          className="text-white p-2 px-md-3"
          style={{ backgroundColor: "#563d7c", fontSize: "0.9rem" }}
        >
          <Nav.Link href="#home" style={{ textAlign: "right" }}>
            Anuncie aqui
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}
