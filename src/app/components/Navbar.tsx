import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="font-roboto h-full text-2xl">
      <ul className="my-4 flex flex-col h-full justify-center items-center">
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/about-me"
          >
            About me
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/skills"
          >
            My skills
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/my-work"
          >
            My work
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/contact"
          >
            Contact Me
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/devlogs"
          >
            Devlogs
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="text-beige no-underline hover:text-teal transition-colors duration-300"
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
