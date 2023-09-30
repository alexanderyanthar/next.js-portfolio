import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="relative pb-4 h-screen w-10/12">
        <iframe
          src="https://www.loom.com/embed/95b9092dfb7e4fe5b2dc7b6468096ad7?sid=5b6c13c1-f57c-4e2a-a796-306e100085fc?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
