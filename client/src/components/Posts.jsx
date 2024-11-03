import React from "react";
import logo from "../assets/logo.svg";

export default function Posts({ posts }) {
  return (
    <div className="flex flex-col gap-8 mb-24 p-4">
      {posts.map((post, i) => (
        <div
          key={i}
          className={`${
            post.type === "user"
              ? "ml-auto bg-interactive p-3 rounded-lg"
              : "mr-auto"
          } flex gap-4`}
        >
          {post.type === "ai" && (
            <img
              src={logo}
              alt="Skrape AI"
              loading="lazy"
              className="w-9 h-9 rounded-full p-2 border border-text2 border-[.5px]"
            />
          )}
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
