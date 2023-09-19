"use client";

import { Carousel } from "react-bootstrap";

interface CarouselProps {
  descriptions: string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ descriptions }) => {
  return (
    <Carousel className="h-screen flex justify-center items-center">
      {descriptions.map((description, index) => (
        <Carousel.Item className="" key={index}>
          <p className="text-beige w-1/2 mx-auto my-0 h-40 flex justify-center items-center">
            {description}
          </p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
