import Link from "next/link";
import React from "react";

const Posts = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return (
    <div className="px-10">
      {data.posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div className="my-6 border border-gray-300 p-2">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.body}</p>
            <p>Reactions: {post.reactions}</p>
            <div className="mt-4">
              {post.tags.map((tag, index) => (
                <p className="font-bold" key={index}>
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
