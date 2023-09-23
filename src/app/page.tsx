import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header className="h-screen flex bg-dark-gray relative">
        <div className="background-image h-screen w-screen absolute opacity-30">
          <p className="sr-only">Background image of Alexander Yanthar</p>
        </div>
        <div className="container mx-auto my-0 flex z-50">
          <Navbar />
          <div className="flex flex-col ml-8 text-beige h-1/4 w-10/12 items-end justify-center mt-8">
            <h1 className="font-playfair text-beige text-7xl font-extrabold pb-4">
              Alexander Yanthar
            </h1>
            <h2 className="font-playfair text-4xl font-bold">Web developer</h2>
          </div>
        </div>
      </header>
    </>
  );
}
