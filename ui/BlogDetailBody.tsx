"use client";

import CodeBlock from "./CodeBlock";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogDetailTextStyle from "./BlogDetailTextStyle";
import urlFor from "../lib/urlFor";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { getSandpackCssText } from "@codesandbox/sandpack-react";

const BlogDetailBody = ({ post }) => {
  const [mount, setMount] = useState(false);

  return (
    <div className={`w-full m-auto`}>
      {post.body.map((block: Block) => {
        if (block._type === "code") {
          if (block.language === "jsx")
            return (
              <Sandpack
                theme={{
                  colors: {
                    surface1: "#2b3935",
                    surface2: "#191324",
                    surface3: "#524763",
                    clickable: "#aaaaaa",
                    base: "#ffffff",
                    disabled: "#aaaaaa",
                    hover: "#ffffff",
                    accent: "#82d8d8",
                    error: "#e54b4b",
                    errorSurface: "#191324",
                  },
                  syntax: {
                    plain: "#ffffff",
                    comment: {
                      color: "#82d8d8",
                      fontStyle: "italic",
                    },
                    keyword: "#e54b4b",
                    tag: "#ff26be",
                    punctuation: "#9588aa",
                    definition: "#82d8d8",
                    property: "#82d8d8",
                    static: "#82d8d8",
                    string: "#a8fe39",
                  },
                  font: {
                    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    mono: '"MonoLisa", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
                    size: "12px",
                    lineHeight: "18px",
                  },
                }}
                template="react"
              />
            );
          return (
            <CodeBlock
              key={block._key}
              code={block.code}
              language={block.language}
            />
          );
        }
        if (block._type === "image")
          return (
            <div
              key={block._key}
              className="relative w-full h-56 md:h-96 mx-auto"
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
