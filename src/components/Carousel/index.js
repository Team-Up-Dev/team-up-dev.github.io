import Slider from "react-slick";
import image1 from "./image1.webp";
import image2 from "./image2.webp";
import image3 from "./image3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="slide" src={image1} alt="image1" />
      </div>
      <div>
        <img className="slide" src={image2} alt="image2" />
      </div>
      <div>
        <img className="slide" src={image3} alt="image3" />
      </div>
    </Slider>
  );
};

export default Carousel;
