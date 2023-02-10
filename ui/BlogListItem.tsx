"use client";

import Img from "next/image";
import urlFor from "../lib/urlFor";
import { useDrag } from "../app/shard/DragContext";
import { PortableText } from "@portabletext/react";
import BlogListTextStyle from "./BlogListTextStyle";
import { useMemo, MouseEvent } from "react";
import useSound from "use-sound";
import { useSettingSound } from "../app/shard/SoundContext";

type Props = {
  post: Post;
  idx: number;
};
const BlogListItem = ({ post, idx }: Props) => {
  const [drag] = useDrag();
  const [sound] = useSettingSound();
  const [play] = useSound("/sounds/tick.mp3", { volume: 1 });

  const isNotEmpyBlock = useMemo(
    () =>
      post.body.filter(
        (block) =>
          block._type === "block" &&
          block.children.filter((chil) => chil.text.length > 0).length > 0
      ),
    [post]
  );

  const handleHoverSound = (e: MouseEvent<HTMLLIElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget.id !== "wizard" && sound === true) play();
  };

  if (isNotEmpyBlock)
    return (
      <li
        id={post._id}
        data-idx={idx}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onMouseEnter={handleHoverSound}
        className={`group dropzone relative flex flex-col 
        w-full h-fit md:rounded-lg shadow-xl overflow-hidden box-border ${
          drag.overId === post._id && "over"
        }   `}
        key={post._id}
      >
        {/* Image */}
        {post.mainImage && (
          <div
            className={`relative h-40 w-full ${
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

        {/* text */}
        <div
          className="w-full h-fit bg-white dark:bg-[#222222] md:rounded-lg  
        text-white dark:text-black flex flex-col justify-between px-5 py-3"
        >
          <div className="text-background ">
            <div className="flex justify-between items-center mb-2 ">
              {/* title */}
              <p className="md:text-2xl group-hover:text-gradient text-xl font-bold">
                {post.title && post.title}
              </p>

              {/* categories */}
              <div className="">
                {post.categories &&
                  post.categories.slice(0, 1).map((category) => (
                    <p
                      className="text-sm md:text-md px-2 font-bold text-green-400 dark:text-blue-400"
                      key={category._id}
                    >
                      {category.title}
                    </p>
                  ))}
              </div>
            </div>
            <div
              className={` h-fit relative text-primary flex-1 text-md 
            md:text-[16px] w-full overflow-hidden mb-2`}
            >
              <p className="text-background inline text-md text-gray-700">
                {post.description && `${post.description}  `}
              </p>
              <div className="h-fit inline text-[15px]">
                {isNotEmpyBlock.slice(0, drag.cache[idx] + 1).map((block) => {
                  if (block._type === "block")
                    return (
                      <div key={block._key} className="py-2">
                        <PortableText
                          value={block}
                          components={BlogListTextStyle}
                        />
                      </div>
                    );
                })}
              </div>
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
