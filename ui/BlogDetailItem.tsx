import Img from "next/image";
import urlFor from "../lib/urlFor";
import { PortableText } from "@portabletext/react";
import BlogDetailTextStyle from "./BlogDetailTextStyle";
import ArrowLinks from "./ArrowLinks";

type Slug = {
  _type: string;
  current: string;
};

type Props = {
  post: Post;
  nextPath: string;
  prevPath: string;
};
const BlogDetailItem = ({ post, nextPath, prevPath }: Props) => {
  return (
    <article
      id={post._id}
      className={`relative h-full w-full grid grid-cols-[1fr_min(65ch,100%)_1fr] 
      auto-rows-max [&>div]:col-end-2 [&>div]:col-start-2 [&>div]:px-4
      overflow-x-hidden bg-background `}
    >
      {/* Main Image */}
      {post.mainImage && (
        <div className={` !col-start-1 !col-end-4 relative h-60 `}>
          <Img
            draggable="false"
            className="object-cover"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>
      )}
      {/* title */}
      <div className="flex justify-center my-10 ">
        <p className="text-3xl md:text-4xl font-extrabold">
          {post.title && post.title}
        </p>
      </div>
      <div className={`mb-2`}>
        {/* description */}
        <p className="text-background text-xl inline">
          {post.description && `${post.description} `}
        </p>
      </div>
      <div className="flex justify-between px-5 md:px-0">
        <div className="flex justify-center items-center ">
          {/* author */}
          <Img
            width={40}
            height={40}
            className="rounded-full w-12 h-12 object-cover mr-2"
            src={urlFor(post.author.image).url()}
            alt={post.author.name}
          />
          <p className="mr-1 text-gray-600">{post.author.name} • </p>
          {/* date */}
          <p className="text-sm font-sans text-gray-600">
            {new Date(post._createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        {/* category */}
        <div className=" ">
          {post.categories &&
            post.categories.map((category) => (
              <p
                className="text-md font-bold text-green-400 dark:text-blue-400"
                key={category._id}
              >
                {category.title}
              </p>
            ))}
        </div>
      </div>
      {/* body */}
      <div className="w-full m-auto">
        {post.body.map((block: Block) => {
          return (
            <div key={block._key} className="my-7">
              <PortableText value={block} components={BlogDetailTextStyle} />
            </div>
          );
        })}
      </div>
      <ArrowLinks nextPath={nextPath} prevPath={prevPath} />
    </article>
  );
};

export default BlogDetailItem;
