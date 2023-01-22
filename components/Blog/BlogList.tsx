import Img from "next/image";
import urlFor from "../../lib/urlFor";
import { PortableText } from "@portabletext/react";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  console.log("description", posts[1].description);
  return (
    <ul
      className=" gap-y-4 grid grid-cols-1 md:grid-cols-2  md:px-10 md:gap-10
      md:gap-y-16 md:pb-24"
    >
      {posts.map((post) => (
        <li
          className="relative flex flex-col cursor-pointer w-full "
          key={post._id}
        >
          <div className="relative w-full h-52 md:h-80 drop-shadow-lg md:rounded overflow-hidden  ">
            <Img
              className="object-cover md:rounded-lg object-left lg:object-center "
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
            <div
              className="ts-color absolute bottom-0 w-full 
             bg-white  dark:bg-[#070707] text-white flex flex-col justify-between px-5 py-3 "
            >
              <div className="text-background ">
                <div className="flex justify-between mb-2">
                  <p className="text-lg md:text-2xl">{post.title}</p>
                  {post.categories.map((category) => (
                    <div className="text-md font-bold text-green-400 dark:to-blue-400 ">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
                <div
                  className=" text-primary flex-1 text-sm md:text-[16px]
                  w-full h-[40px] overflow-hidden mb-2 "
                >
                  <PortableText value={post.body} />
                </div>

                <p className="text-sm  font-sans text-gray-600">
                  {new Date(post._createdAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
