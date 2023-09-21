"use client";

import { StaticImageData } from "next/image";
import { Carousel } from "react-bootstrap";

interface CarouselProps {
  items: Array<{ description: string; imageUrl: string }>;
}

const CarouselComponent: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Carousel className="flex justify-center items-center" interval={20000}>
      {items.map((item, index) => (
        <Carousel.Item className="relative" key={index}>
          <div className="flex flex-col justify-center rounded items-center h-screen">
            <div className="flex justify-center">
              <img
                className="opacity-30"
                src={item.imageUrl}
                alt={`Slide ${index}`}
              />
            </div>
            <p className="text-beige text-xl w-2/3 mx-auto my-0 flex items-center absolute">
              {item.description}
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
