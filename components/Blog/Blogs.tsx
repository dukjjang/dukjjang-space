"use client";

import Img from "next/image";
import urlFor from "../../lib/urlFor";
import { DragEvent, useState } from "react";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  const initialDragCache = posts.map((post) => ({ id: post._id, magic: 0 }));
  const [dragCache, setDragCache] = useState(initialDragCache);
  console.log(dragCache);

  const handleDrop = ({
    e,
    idx,
  }: {
    e: DragEvent<HTMLLIElement>;
    idx: number;
  }): void => {
    console.log("drop!", e.currentTarget.id);
    const targetBlogId = e.currentTarget.id;

    const temp = [...dragCache];
    temp[idx].magic += 1;
    setDragCache(temp);
  };

  console.log(
    posts[2].body.find((item) => item._type === "block").children[0].text
  );

  console.log(posts[2].body);

  return (
    <ul
      className=" gap-y-4 grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense md:px-10 
      md:gap-10 md:gap-y-16 md:pb-24 md:h-full "
    >
      {posts.map((post, idx) => (
        <li
          id={post._id}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop({ e, idx })}
          className={`${dragCache[idx].magic === 1 && `row-span-2 h-96`} ${
            dragCache[idx].magic === 2 && `row-span-4 h-[500px]`
          } relative flex flex-col w-full max-sm:row-span-2 max-sm:h-96 rounded-lg h-full md:overflow-hidden drop-shadow-xl `}
          key={post._id}
        >
          {
            <div
              className={`${
                dragCache[idx].magic > 0 ? "md:block" : "md:hidden"
              } relative h-full w-full`}
            >
              <Img
                draggable={false}
                className="object-cover"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          }
          <div
            className=" bottom-0 w-full h-full 
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
                  dragCache[idx].magic === 2 ? "h-[140px]" : "h-[50px]"
                } text-primary flex-1 text-md md:text-[16px]
                  w-full  overflow-hidden mb-2 `}
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
      ))}
    </ul>
  );
};

export default Blogs;
