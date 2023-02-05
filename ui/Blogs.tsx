"use client";

import Link from "next/link";
import useSound from "use-sound";
import BlogListItem from "./BlogListItem";
import { useSettingSound } from "../app/shard/SoundContext";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  const [sound] = useSettingSound();
  const [playClick] = useSound("/sounds/click.mp3", {
    volume: sound === true ? 0.8 : 0,
  });

  return (
    <ul
      id="blogs"
      className="w-full h-full gap-y-6 grid grid-cols-1 md:grid-cols-2   
      md:px-16 md:gap-x-8 md:gap-y-14 md:pb-24 md:h-fit md:py-10 box-border
      overflow-hidden"
    >
      {posts.map((post, idx) => (
        <Link
          onClick={() => playClick()}
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
