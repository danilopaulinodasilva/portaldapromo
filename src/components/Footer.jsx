import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <Container style={{ fontSize: ".9rem" }} fluid>
      <Row>
        <Col
          style={{ backgroundColor: "#563d7c" }}
          className="text-white py-2 pt-4 px-md-5 text-center"
        >
          <p>
            © {new Date().getFullYear()} Juros Abusivos. Todos os direitos
            reservados. Desenvolvido por{" "}
            <a href="#" style={{ color: "#ffffff" }}>
              Neoadtech
            </a>
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
}
