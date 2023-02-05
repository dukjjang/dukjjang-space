"use client";

import Link from "next/link";
import BlogListItem from "./BlogListItem";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  return (
    <ul
      id="blogs"
      className="w-full h-full gap-y-6 grid grid-cols-1 md:grid-cols-2   
      md:px-16 md:gap-x-8 md:gap-y-14 md:pb-24 md:h-fit md:py-10 box-border
      overflow-hidden"
    >
      {posts.map((post, idx) => (
        <Link
          className="h-fit"
          key={post._id}
          href={`/writing/${post.slug.current}`}
        >
          <BlogListItem post={post} idx={idx} />
        </Link>
      ))}
    </ul>
  );
};

export default Blogs;
