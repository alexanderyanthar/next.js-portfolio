import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import htmlIcon from "../../../public/html5-original-wordmark.svg";
import CSSIcon from "../../../public/css3-original-wordmark.svg";
import SassIcon from "../../../public/sass-original.svg";
import TailwindIcon from "../../../public/tailwindcss-original-wordmark.svg";
import NextjsIcon from "../../../public/nextjs-line.svg";
import reactIcon from "../../../public/react-original-wordmark.svg";
import bootstrapIcon from "../../../public/bootstrap-original-wordmark.svg";
import djangoIcon from "../../../public/django-plain-wordmark.svg";
import expressIcon from "../../../public/express-original.svg";
import nodeIcon from "../../../public/nodejs-original-wordmark.svg";
import mongodbIcon from "../../../public/mongodb-original-wordmark.svg";
import mySQLIcon from "../../../public/mysql-original-wordmark.svg";
import javascriptIcon from "../../../public/javascript-original.svg";
import pythonIcon from "../../../public/python-original-wordmark.svg";
import typescriptIcon from "../../../public/typescript-original.svg";
import accessibilityIcon from "../../../public/accessibility_new_FILL0_wght400_GRAD0_opsz24.svg";
import gitIcon from "../../../public/git-original-wordmark.svg";
import gitHubIcon from "../../../public/github-original-wordmark.svg";
import herokuIcon from "../../../public/heroku-original-wordmark.svg";
import jestIcon from "../../../public/jest-plain.svg";

const page = () => {
  const items = [
    {
      images: [
        // {
        //   description: "CSS",
        //   imageUrl: CSSIcon.src,
        // },
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
    {
      images: [
        {
          description: "Django",
          imageUrl: djangoIcon.src,
        },
        {
          description: "Express",
          imageUrl: expressIcon.src,
        },
        {
          description: "MongoDB",
          imageUrl: mongodbIcon.src,
        },
        {
          description: "MySQL",
          imageUrl: mySQLIcon.src,
        },
        {
          description: "Node",
          imageUrl: nodeIcon.src,
        },
      ],
      slideDescription: "Back-end Stack",
    },
    {
      images: [
        {
          description: "JavaScript",
          imageUrl: javascriptIcon.src,
        },
        {
          description: "Python",
          imageUrl: pythonIcon.src,
        },
        {
          description: "TypeScript",
          imageUrl: typescriptIcon.src,
        },
        {
          description: "HTML",
          imageUrl: htmlIcon.src,
        },
        {
          description: "CSS",
          imageUrl: CSSIcon.src,
        },
      ],
      slideDescription: "Langauges",
    },
    {
      images: [
        {
          description: "Accessibility",
          imageUrl: accessibilityIcon.src,
        },
        {
          description: "Git",
          imageUrl: gitIcon.src,
        },
        {
          description: "GitHub",
          imageUrl: gitHubIcon.src,
        },
        {
          description: "Heroku",
          imageUrl: herokuIcon.src,
        },
        {
          description: "Jest",
          imageUrl: jestIcon.src,
        },
      ],
      slideDescription: "Other",
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
