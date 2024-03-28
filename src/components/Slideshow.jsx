import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getSlidesAcf } from "../graphql/wordpress";

export function Slideshow() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function loadSlides() {
      const initialSlides = await getSlidesAcf();
      setSlides(initialSlides.slides.edges);
    }

    loadSlides();
  }, []); // A dependência vazia [] faz com que o useEffect seja executado uma vez após a montagem do componente

  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.node.databaseId}>
          <a href={slide.node.slides.linkDaCampanha}>
            <img
              className="d-block w-100"
              src={slide.node.slides.imagem.node.mediaItemUrl}
              alt={slide.node.title}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
