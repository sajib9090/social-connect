"use client";
import React from "react";

import { useParams } from "next/navigation";

const SinglePost = () => {
  const { id } = useParams();
  console.log(id);
  return <div>single post</div>;
};

export default SinglePost;
