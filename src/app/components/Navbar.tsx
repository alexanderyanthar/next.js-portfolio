"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="font-roboto h-full text-2xl">
      <ul className="my-4 flex flex-col h-full justify-center items-center">
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-mustard transition-colors duration-300 ${
              pathname === "/" ? "text-mustard font-bold animate-pulse" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-mustard transition-colors duration-300 ${
              pathname === "/about-me"
                ? "text-mustard font-bold animate-pulse"
                : ""
            }`}
            href="/about-me"
          >
            About me
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-mustard transition-colors duration-300 ${
              pathname === "/skills"
                ? "text-mustard font-bold animate-pulse"
                : ""
            }`}
            href="/skills"
          >
            My skills
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-teal transition-colors duration-300 ${
              pathname === "/my-work" ? "text-teal" : ""
            }`}
            href="/my-work"
          >
            My work
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-teal transition-colors duration-300 ${
              pathname === "/contact" ? "text-teal" : ""
            }`}
            href="/contact"
          >
            Contact Me
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-teal transition-colors duration-300 ${
              pathname === "/devlogs" ? "text-teal" : ""
            }`}
            href="/devlogs"
          >
            Devlogs
          </Link>
        </li>
        <li className="my-4">
          <Link
            className={`text-beige no-underline hover:text-teal transition-colors duration-300 ${
              pathname === "/blog" ? "text-teal" : ""
            }`}
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
