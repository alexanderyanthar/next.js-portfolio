import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import image1 from "../../../public/alex-image-carousel.png";
import image2 from "../../../public/sourdough-image-carousel-test.png";
import image3 from "../../../public/waterfall-image-carousel.png";
import image4 from "../../../public/blank-canvas.png";

const page = () => {
  const items = [
    {
      images: [{ imageUrl: image1.src }],
      slideDescription:
        "Hello, Alex here! I am a passionate coder and web developer who finds endless fascination in the world of programming. I believe my insatiable curiosity and love for problem-solving make coding my favorite aspect of the job.",
    },
    {
      images: [{ imageUrl: image2.src }],
      slideDescription:
        "Beyond the realms of coding, I am a true experimenter at heart. I'm always on the lookout for new ideas and ventures to explore. From concocting my own soy sauce and crafting delightful miso to nurturing a lush and vibrant garden, my love for experimentation knows no bounds. But perhaps one of my most rewarding passions is my journey as a baker. All of these things taught me patience, perseverance and dedication.",
    },
    {
      images: [{ imageUrl: image3.src }],
      slideDescription:
        "Throughout my coding and web development journey, I've acquired a wealth of knowledge and honed my skills to create impactful and user-friendly digital experiences. I am constantly seeking inspiration from both the coding community and the natural world, I aim to infuse creativity and innovation into every aspect of my work.",
    },
    {
      images: [{ imageUrl: image4.src }],
      slideDescription:
        "Ultimately, I see coding as an ever-evolving canvas that allows me to blend my passion for problem-solving with my innate love for exploration and experimentation. Thank you for taking the time to get to know me a little better. Let's connect!",
    },
  ];

  const styles = {
    containerStyle: "flex justify-center items-center",
    itemContentStyle:
      "flex flex-col justify-center rounded items-center h-screen",
    itemStyle: "relative",
    imageContainerStyle: "flex justify-center",
    imageStyle: "opacity-30",
    captionStyle:
      "text-beige text-xl w-2/3 mx-auto my-0 flex items-center absolute",
  };

  return (
    <div className="h-screen bg-dark-gray">
      <div className="container mx-auto my-0 flex items-center justify-between h-full">
        <Navbar />
        <section className="w-9/12 text-beige">
          <div className="">
            <CarouselComponent items={items} styles={styles} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
