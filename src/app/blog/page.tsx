"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

// Call API

interface BlogPost {
  id: number;
  attributes: {
    Title: string;
    Post: string;
  };
}

const page: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = "http://localhost:1337/api/articles/";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center items-center bg-dark-gray h-screen">
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-9/12 flex flex-col justify-center items-center text-beige">
          {blogPosts.map((blogPost) => (
            <div key={blogPost.id}>
              <h1>{blogPost.attributes.Title}</h1>
              <p>{blogPost.attributes.Post}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
