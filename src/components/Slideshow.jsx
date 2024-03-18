import Carousel from "react-bootstrap/Carousel";

export function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://promocaohitsdalimpeza.com.br/?utm_source=portal+da+promo&utm_medium=cpl&utm_campaign=UL-LD-HC-PRMHDL-HCP-NSA-PPRO-NSA-CMB-PRF">
          <img
            className="d-block w-100"
            src="https://storage.googleapis.com/portal-da-promo/L01_banner_promocaounileveromocomfort-hitsdalimpeza-20241710267935198.webp"
            alt="Primeiro slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://storage.googleapis.com/portal-da-promo/L01_card_promocaogomesdacosta-70anosdehistoria-20241707168796739.webp">
          <img
            className="d-block w-100"
            src="https://storage.googleapis.com/portal-da-promo/L01_banner_promocaogomesdacosta-70anosdehistoria-20241707168977357.webp"
            alt="Segundo slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
