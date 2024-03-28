import Carousel from "react-bootstrap/Carousel";
import { getSlidesAcf } from "../graphql/wordpress";

const initialSlides = await getSlidesAcf();

export function Slideshow() {
  return (
    <Carousel>
      {initialSlides.slides.edges.map((slide) => (
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
