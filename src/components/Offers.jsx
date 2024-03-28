/* eslint-disable no-unused-vars */

import { CgSandClock } from "react-icons/cg";
import { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {
  getSiteLogo,
  getOffersAcf,
  getCategoriesAcf,
} from "../graphql/wordpress";

const cards = async () => {
  return await getOffersAcf();
};

let initialCards = [];

cards.ofertas.edges.forEach((card) => {
  initialCards.push({
    id: card.node.databaseId,
    title: card.node.title,
    expirationDate: card.node.ofertas.dataExpiracaoDaOferta,
    image: card.node.ofertas.imagemDeOferta.node.mediaItemUrl,
    description: card.node.ofertas.descricao,
    category: card.node.ofertas.categoria.edges[0].node.title,
    link: card.node.ofertas.linkDaOferta,
  });
});

const initialCategories = await getCategoriesAcf();

const calculateRemainingDays = (expirationDate) => {
  // Obter a data e hora atuais em UTC
  const now = new Date();
  const currentDate = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  // Converter a data de expiração para um objeto Date
  const expiryDate = new Date(expirationDate);

  // Calcular a diferença em milissegundos
  const timeDifference = expiryDate - currentDate;

  // Converter a diferença de tempo em dias
  const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return remainingDays;
};

export function Offers() {
  const [cards, setCards] = useState(initialCards);
  const [filter, setFilter] = useState("");

  // Função para filtrar cards
  const filterCards = (category) => {
    setFilter(category);
  };

  // Filtragem dos cards de acordo com a categoria selecionada
  const filteredCards = cards.filter(
    (card) => filter === "" || card.category === filter
  );

  return (
    <Container fluid className="pb-5">
      <ul id="filters" style={{ marginBottom: "3rem" }}>
        <li
          className={filter === "" ? "active" : ""}
          onClick={() => filterCards("")}
        >
          Todas as promoções
        </li>

        {initialCategories.categorias.edges.map((category) => (
          <li
            key={category.node.databaseId}
            className={filter === category.node.title ? "active" : ""}
            onClick={() => filterCards(category.node.title)}
          >
            {category.node.title}
          </li>
        ))}
      </ul>

      <Row className="px-md-5">
        {filteredCards.map((card) => (
          <Col md={3} className="py-2" key={card.id}>
            <Card
              className="card-transition card-enter-active"
              style={{
                width: "100%",
                height: "100%",
                border: "15px solid orange",
              }}
            >
              <a
                href={card.link}
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ borderRadius: "5px" }}
                />
                <Card.Body>
                  <Card.Text style={{ fontSize: ".85rem", color: "#999" }}>
                    <CgSandClock /> Oferta expira em{" "}
                    {calculateRemainingDays(card.expirationDate)} dias
                  </Card.Text>
                  <Card.Title
                    style={{
                      color: "#444172",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#717f99", fontSize: "0.9rem" }}>
                    {card.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#563d7c",
                      borderColor: "#563d7c",
                      width: "100%",
                      fontSize: "1.2rem",
                    }}
                  >
                    Saiba mais
                  </Button>
                </Card.Body>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
