import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getHomepage } from "../graphql/wordpress";

export function Featured() {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    async function fetchData() {
      const page = await getHomepage();
      setPageContent(page.page.content);
    }
    fetchData();
  }, []);

  function createMarkup() {
    return { __html: pageContent };
  }

  return (
    <Container fluid>
      <Row>
        <Col className="py-5 px-md-5 text-center">
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </Col>
      </Row>
    </Container>
  );
}
