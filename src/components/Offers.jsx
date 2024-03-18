/* eslint-disable no-unused-vars */

import { CgSandClock } from "react-icons/cg";
import { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

// Simulação de dados dos cards
const initialCards = [
  {
    id: 1,
    title: "Promoção Unilever Omo Comfort 2024 Hits da Limpeza",
    image:
      "https://storage.googleapis.com/portal-da-promo/L01_card_promocaounileveromocomfort-hitsdalimpeza-20241710267850657.webp",
    description:
      "Compre um produto participante e concorra a R$ 1 MILHÃO e a prêmios instantâneos! Comprando Omo + Comfort ainda tem DINHEIRO DE VOLTA!",
    category: "Categoria A",
    link: "https://promocaohitsdalimpeza.com.br/?utm_source=portal+da+promo&utm_medium=cpl&utm_campaign=UL-LD-HC-PRMHDL-HCP-NSA-PPRO-NSA-CMB-PRF",
  },
  {
    id: 2,
    title: "Promoção MID 2024 meio milhão de motivos para refrescar sua vida",
    image:
      "https://storage.googleapis.com/portal-da-promo/L01_card_promocaomid-meiomilhaodemotivospararefrescarsuavida-20241708455188705.webp",
    description:
      "Compre 5 sachês de MID e/ou MID ZERO e concorra a R$ 500 mil, além de um kit tecnologia com PS5 para te deixar conectado toda semana!",
    category: "Categoria B",
    link: "https://promomid.com.br/?utm_source=Portal-da-Promo&utm_medium=banner&utm_campaign=Ajinomoto_Capp_promo-mid_consideracao_Promo_Portal-da-Promo_Conversao_cpm_Promo%C3%A7%C3%A3o-mid&utm_content=All_Interesses_Conversao_18+_BR_All_Pe%C3%A7a-5__Conversao_Participe-ja-e-concorra&utm_term=estatico_342x224_NA_site-promo_Participe-ja-e-concorra-pe%C3%A7a-5_NA",
  },
  {
    id: 3,
    title: "Promoção Gomes da Costa 2024 - 70 anos de história",
    image:
      "https://storage.googleapis.com/portal-da-promo/L01_card_promocaogomesdacosta-70anosdehistoria-20241707168796739.webp",
    description:
      "Compre 5 sachês de MID e/ou MID ZERO e concorra a R$ 500 mil, além de um kit tecnologia com PS5 para te deixar conectado toda semana!",
    category: "Categoria A",
    link: "http://promogomesdacosta.com.br/?utm_source=Portal+da+Promo&utm_medium=Org%C3%A2nico&utm_campaign=2024&utm_id=Portal+da+Promo",
  },
  {
    id: 4,
    title: "Promoção Elma Chips 2024 Mordida Premiada",
    image:
      "https://storage.googleapis.com/portal-da-promo/L01_card_promocaoelmachips-mordidapremiada-20241709647806168.webp",
    description:
      "Compre produtos Elma Chips participantes e concorra a milhares de PRÊMIOS EM DINHEIRO* NA HORA!",
    category: "Categoria C",
    link: "https://portaldapromo.com.br/promocao/promocaoelmachips-mordidapremiada-2024-A01B02C01D04E02F01G04",
  },
];

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
      <ul id="filters" style={{}}>
        <li
          className={filter === "" ? "active" : ""}
          onClick={() => filterCards("")}
        >
          Todas as promoções
        </li>
        <li
          className={filter === "Categoria A" ? "active" : ""}
          onClick={() => filterCards("Categoria A")}
        >
          As mais procuradas
        </li>
        <li
          className={filter === "Categoria B" ? "active" : ""}
          onClick={() => filterCards("Categoria B")}
        >
          Novidades
        </li>
        <li
          className={filter === "Categoria C" ? "active" : ""}
          onClick={() => filterCards("Categoria C")}
        >
          Encerradas
        </li>
      </ul>

      <Row className="px-md-5">
        {filteredCards.map((card) => (
          <Col md={3} className="py-2" key={card.id}>
            <Card
              className="card-transition card-enter-active"
              style={{ width: "100%" }}
            >
              <a
                href={card.link}
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Text style={{ fontSize: ".85rem", color: "#999" }}>
                    <CgSandClock /> Oferta expira em 44 dias
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
                      fontSize: "0.9rem",
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
