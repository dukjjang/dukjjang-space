"use client";

import Img from "next/image";
import { Dispatch, SetStateAction } from "react";
import { DragEvent } from "react";
import urlFor from "../../lib/urlFor";

type Props = {
  post: Post;
  idx: number;
  dragCache: { id: string; magic: number }[];
  setDragCache: Dispatch<SetStateAction<{ id: string; magic: number }[]>>;
  currentDragEnter: number;
  setCurrentDragEnter: Dispatch<SetStateAction<number>>;
};

const BlogItem = ({
  post,
  idx,
  dragCache,
  setDragCache,
  currentDragEnter,
  setCurrentDragEnter,
}: Props) => {
  const handleDragEnter = (e: DragEvent<HTMLLIElement>, idx: number) => {
    console.log("엔터", idx);
    setCurrentDragEnter(idx);
    e.preventDefault();
  };

  const handleDrop = (idx: number): void => {
    setCurrentDragEnter(-1);

    if (dragCache[idx].magic === 2) return;

    const temp = [...dragCache];
    temp[idx].magic += 1;
    setDragCache(temp);
  };

  return (
    <li
      onDrop={() => handleDrop(idx)}
      id={post._id}
      onDragEnter={(e) => {
        handleDragEnter(e, idx);
      }}
      className={`${dragCache[idx].magic === 1 && `row-span-2 h-fit`} ${
        dragCache[idx].magic === 2 && `row-span-4 h-[500px]`
      } dropzone relative flex flex-col w-full md:rounded-lg shadow-lg
       overflow-hidden  box-border ${currentDragEnter === idx && "over"}  `}
      key={post._id}
    >
      <div
        className={`${
          dragCache[idx].magic === 2 ? "md:block" : "md:hidden"
        } relative h-full w-full`}
      >
        <Img
          className="object-cover "
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
        />
      </div>
      <div
        className="  w-full h-fit 
             bg-white dark:bg-[#222222] text-white flex flex-col justify-between 
              px-5 py-3  "
      >
        <div className="text-background ">
          <div className="flex justify-between mb-2">
            <p className="text-xl md:text-2xl">{post.title}</p>
            {post.categories.map((category) => (
              <div
                key={category._id}
                className="text-md font-bold text-green-400 dark:text-blue-400"
              >
                <p>{category.title}</p>
              </div>
            ))}
          </div>
          <div
            className={`${
              dragCache[idx].magic > 0 ? "h-[140px]" : "h-[50px]"
            } text-primary flex-1 text-md md:text-[16px]
                  w-full overflow-hidden mb-2 `}
          >
            <p className="text-background inline">
              {post.description && `${post.description} | `}
            </p>
            <p className=" inline">
              {post.body
                .find((item) => item._type === "block")
                .children.map((child) => child.text)}
            </p>
          </div>
          <p className="text-sm font-sans text-gray-600">
            {new Date(post._createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
