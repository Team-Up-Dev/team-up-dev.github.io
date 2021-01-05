import image1 from "./image1.jpg";
import image2 from "./image2.webp";
import image3 from "./image3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useState, useCallback } from "react";

const dataSlide = [
  {
    title: "First slide label",
    text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    image: image1
  },
  {
    title: "Second slide label",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image2
  },
  {
    title: "Third slide label",
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    image: image3
  }
];

const Slide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback(
    (selectedIndex) => void setIndex(selectedIndex),
    []
  );

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {dataSlide.map((data, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={data.image}
            alt={data.title.replace("label", "image")}
            height="580px"
          />
          <Carousel.Caption>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;
