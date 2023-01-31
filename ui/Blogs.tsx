import Link from "next/link";
import BlogListItem from "./BlogListItem";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  console.log(posts[2].slug.current);
  return (
    <ul
      id="blogs"
      className="h-fit gap-y-6 grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense 
      md:px-16 md:gap-10 md:gap-y-16 md:pb-24 md:h-fit md:py-10 box-border "
    >
      {posts.map((post, idx) => (
        <Link
          key={post._id}
          href={`/writing/${post.slug.current}`}
          className="h-fit"
        >
          <BlogListItem post={post} idx={idx} />
        </Link>
      ))}
    </ul>
  );
};

export default Blogs;
