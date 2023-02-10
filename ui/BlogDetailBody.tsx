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
        if (block._type === "image") {
          const imageSize = block.asset._ref
            .split("-")[2]
            .split("x")
            .map((size) => Number(size));
          return (
            <div key={block._key} className={`relative  mx-auto`}>
              <Image
                className="object-contain"
                src={urlFor(block).url()}
                alt="Blog Post Image"
                width={imageSize[0]}
                height={imageSize[1]}
              />
            </div>
          );
        }
        return (
          <div
            key={block._key}
            className={`${
              block.listItem ? "my-4" : "my-7"
            } text-[16px] md:text-[18px] text-gray-700 dark:text-slate-100`}
          >
            <PortableText value={block} components={BlogDetailTextStyle} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetailBody;
