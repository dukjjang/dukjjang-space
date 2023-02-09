"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogDetailTextStyle from "./BlogDetailTextStyle";
import urlFor from "../lib/urlFor";
import CustomSandpack from "./CustomSandpack";

const BlogDetailBody = ({ post }) => {
  return (
    <div className={`w-full m-auto`}>
      {post.body.map((block: Block) => {
        if (block._type === "code") {
          return (
            <CustomSandpack
              key={block._key}
              file={block.code}
              language={block.language}
            />
          );
        }
        if (block._type === "image")
          return (
            <div
              key={block._key}
              className="relative w-full h-56 md:h-80 mx-auto"
            >
              <Image
                className="object-contain"
                src={urlFor(block).url()}
                alt="Blog Post Image"
                fill
              />
            </div>
          );
        return (
          <div
            key={block._key}
            className={`${
              block.listItem ? "my-4" : "my-7"
            }  text-[16px] text-gray-700 dark:text-slate-100`}
          >
            <PortableText value={block} components={BlogDetailTextStyle} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetailBody;
