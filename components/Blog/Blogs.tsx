"use client";

import { DragEvent, useState } from "react";
import BlogItem from "./BlogItem";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  const initialDragCache = posts.map((post) => ({ id: post._id, magic: 0 }));
  const [dragCache, setDragCache] = useState(initialDragCache);
  const [currentDragEnter, setCurrentDragEnter] = useState(-1);

  const handleDragEnter = (e: DragEvent) => {
    const target = e.target as HTMLUListElement;
    if (target.tagName === "UL") setCurrentDragEnter(-1);
  };

  return (
    <ul
      id="blogs"
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={handleDragEnter}
      className=" gap-y-4 grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense md:px-10 
      md:gap-10 md:gap-y-16 md:pb-24 md:h-full md:py-10 "
    >
      {posts.map((post, idx) => (
        <BlogItem
          key={post._id}
          post={post}
          idx={idx}
          dragCache={dragCache}
          setDragCache={setDragCache}
          currentDragEnter={currentDragEnter}
          setCurrentDragEnter={setCurrentDragEnter}
        />
      ))}
    </ul>
  );
};

export default Blogs;
