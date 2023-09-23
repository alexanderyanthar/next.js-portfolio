import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CSSIcon from "../../../public/css3-original-wordmark.svg";
import SassIcon from "../../../public/sass-original.svg";
import TailwindIcon from "../../../public/tailwindcss-original-wordmark.svg";
import NextjsIcon from "../../../public/nextjs-line.svg";
import reactIcon from "../../../public/react-original-wordmark.svg";
import bootstrapIcon from "../../../public/bootstrap-original-wordmark.svg";

const page = () => {
  const items = [
    {
      images: [
        {
          description: "CSS",
          imageUrl: CSSIcon.src,
        },
        {
          description: "sass",
          imageUrl: SassIcon.src,
        },
        {
          description: "TailwindCSS",
          imageUrl: TailwindIcon.src,
        },
        {
          description: "Next.js",
          imageUrl: NextjsIcon.src,
        },
        {
          description: "React.js",
          imageUrl: reactIcon.src,
        },
        {
          description: "Bootstrap",
          imageUrl: bootstrapIcon.src,
        },
      ],
      slideDescription: "Front-end Stack",
    },
  ];

  const styles = {
    containerStyle: "flex justify-center items-center",
    itemContentStyle: "flex flex-col justify-center items-center h-screen",
    itemStyle: "relative",
    imageContainerStyle: "flex justify-center w-9/12 h-10/12 flex-wrap p-8",
    imageStyle: "opacity-100 w-1/3 p-4",
    captionStyle: "text-beige text-4xl flex mx-auto my-0",
  };

  return (
    <div className="h-screen bg-dark-gray">
      <div className="container mx-auto my-0 flex items-center justify-between h-full">
        <Navbar />
        <section className="w-9/12 h-full text-beige">
          <CarouselComponent items={items} styles={styles} />
        </section>
      </div>
    </div>
  );
};

export default page;
