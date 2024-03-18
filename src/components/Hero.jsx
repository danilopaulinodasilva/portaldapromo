import { Container, Row, Col } from "react-bootstrap";
import { Slideshow } from "./Slideshow";

export function Hero() {
  return (
    <Container fluid className="g-0">
      <Row>
        <Col>
          <Slideshow />
        </Col>
      </Row>
    </Container>
  );
}
