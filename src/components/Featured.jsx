import { Container, Row, Col } from "react-bootstrap";
import { getHomepage } from "../graphql/wordpress";

const initialHomepage = async () => {
  return await getHomepage();
};

function createMarkup() {
  return { __html: initialHomepage.page.content };
}

export function Featured() {
  return (
    <Container fluid>
      <Row>
        <Col className="py-5 px-md-5 text-center">
          <div
            className="featured-content"
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
        </Col>
      </Row>
    </Container>
  );
}
