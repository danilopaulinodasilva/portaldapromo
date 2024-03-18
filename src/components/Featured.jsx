import { Container, Row, Col } from "react-bootstrap";

export function Featured() {
  return (
    <Container fluid>
      <Row>
        <Col className="py-5 px-md-5 text-center">
          <h2 style={{ fontWeight: 700 }}>
            Encontre as melhores promoções no Portal da Promo
          </h2>
          <p>
            Fuga in earum voluptatibus illum laudantium nam, est, ipsam
            recusandae repudiandae explicabo id error fugiat et magnam illo
            iusto odit esse dicta?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
