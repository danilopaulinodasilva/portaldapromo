/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { getOffersAcf, getCategoriesAcf } from "../graphql/wordpress";

export function Offers() {
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Carrega as ofertas
    async function loadOffers() {
      const offers = await getOffersAcf();
      const initialCards = offers.ofertas.edges.map((card) => ({
        id: card.node.databaseId,
        title: card.node.title,
        expirationDate: card.node.ofertas.dataExpiracaoDaOferta,
        image: card.node.ofertas.imagemDeOferta.node.mediaItemUrl,
        description: card.node.ofertas.descricao,
        category: card.node.ofertas.categoria.edges[0]?.node.title, // Optional chaining para segurança
        link: card.node.ofertas.linkDaOferta,
      }));
      setCards(initialCards);
    }

    // Carrega as categorias
    async function loadCategories() {
      const fetchedCategories = await getCategoriesAcf();
      setCategories(fetchedCategories.categorias.edges); // Ajustado com base na estrutura esperada
    }

    loadOffers();
    loadCategories();
  }, []);

  const calculateRemainingDays = (expirationDate) => {
    const now = new Date();
    const currentDate = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    );
    const expiryDate = new Date(expirationDate);
    const timeDifference = expiryDate - currentDate;
    const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return remainingDays;
  };

  const filterCards = (category) => {
    setFilter(category);
  };

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
        {categories.map((category) => (
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
                      color: "#563d7c",
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
