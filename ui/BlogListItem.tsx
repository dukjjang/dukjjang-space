import Img from "next/image";
import urlFor from "../lib/urlFor";
import { useDrag } from "../app/shard/DragContext";
import { PortableText } from "@portabletext/react";
import BlogListTextStyle from "./BlogListTextStyle";
import { useMemo } from "react";

type Props = {
  post: Post;
  idx: number;
};
const BlogListItem = ({ post, idx }: Props) => {
  const [drag] = useDrag();

  const isNotEmpyBlock = useMemo(
    () =>
      post.body.filter(
        (block) =>
          block._type === "block" &&
          block.children.filter((chil) => chil.text.length > 0).length > 0
      ),
    [post]
  );

  if (isNotEmpyBlock)
    return (
      <li
        id={post._id}
        data-idx={idx}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        className={`z-30 md:z-40   dropzone relative flex flex-col 
        w-full h-fit md:rounded-lg shadow-lg overflow-hidden box-border ${
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
          className=" w-full h-fit bg-white dark:bg-[#222222]/25 bg-opacity-30 backdrop-blur-sm 
        text-white dark:text-black flex flex-col justify-between px-5 py-3"
        >
          <div className="text-background ">
            <div className="flex justify-between items-center mb-2">
              {/* title */}
              <p className="text-xl md:text-xl ">{post.title && post.title}</p>

              {/* categories */}
              <div className="  ">
                {post.categories &&
                  post.categories.slice(0, 1).map((category) => (
                    <p
                      className="text-sm md:text-md font-bold text-green-400 dark:text-blue-400"
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
              <div className="h-fit inline text-sm">
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
