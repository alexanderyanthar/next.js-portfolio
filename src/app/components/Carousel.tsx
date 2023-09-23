"use client";

import { StaticImageData } from "next/image";
import { Carousel } from "react-bootstrap";
import React from "react";

interface CarouselProps {
  items: Array<{
    images: Array<{
      description?: string;
      imageUrl?: string;
      iconElement?: React.ReactNode;
    }>;
    slideDescription?: string;
  }>;
  interval?: number;
  styles: {
    containerStyle: string;
    itemContentStyle: string;
    itemStyle: string;
    imageContainerStyle: string;
    imageStyle: string;
    captionStyle: string;
  };
}

const CarouselComponent: React.FC<CarouselProps> = ({ items, styles }) => {
  return (
    <Carousel className={styles.containerStyle} interval={20000}>
      {items.map((item, index) => (
        <Carousel.Item className={styles.itemStyle} key={index}>
          <div className={styles.itemContentStyle}>
            {item.slideDescription && (
              <p className={styles.captionStyle}>{item.slideDescription}</p>
            )}
            <div className={styles.imageContainerStyle}>
              {item.images.map((image, i) => (
                <React.Fragment key={i}>
                  {image.imageUrl ? (
                    <img
                      className={styles.imageStyle}
                      src={image.imageUrl}
                      alt={`Slide ${index}`}
                    />
                  ) : image.iconElement ? (
                    image.iconElement
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
