"use client";

import Img from "next/image";
import urlFor from "../lib/urlFor";
import { useDrag } from "../app/shard/DragContext";

type Props = {
  post: Post;
  idx: number;
};
const BlogListItem = ({ post, idx }: Props) => {
  const [drag] = useDrag();

  return (
    <li
      id={post._id}
      data-idx={idx}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={` group -z-0 pb-5 dropzone relative flex flex-col w-full h-full md:rounded-lg shadow-lg
       overflow-hidden box-border ${drag.overId === post._id && "over"} ${
        drag.cache[idx] === 1 && `row-span-2 h-96`
      } ${drag.cache[idx] === 2 && ` row-span-4 h-[500px]`}  `}
      key={post._id}
    >
      {post.mainImage && (
        <div
          className={` relative h-full w-full ${
            drag.cache[idx] > 0 ? "md:block" : "md:hidden"
          } `}
        >
          <Img
            draggable="false"
            className="object-cover"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>
      )}
      <div
        className="w-full h-fit bg-white dark:bg-[#222222] group-hover:bg-white/25 text-white dark:text-black flex 
        flex-col justify-between px-5 py-3"
      >
        <div className="text-background ">
          <div className="flex justify-between mb-2">
            <p className="text-xl md:text-2xl">{post.title && post.title}</p>
            {post.categories &&
              post.categories.map((category) => (
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
              drag.cache[idx] > 1 ? "h-[140px]" : "h-[50px]"
            } relative text-primary flex-1 text-md md:text-[16px]
                  w-full overflow-hidden mb-2 `}
          >
            <p className="text-background inline">
              {post.description && `${post.description} | `}
            </p>
            <p className="h-fit inline text-md">
              {post.body &&
                post.body
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

export default BlogListItem;
