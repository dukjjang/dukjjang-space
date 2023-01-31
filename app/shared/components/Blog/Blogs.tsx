import BlogItem from "./BlogItem";

type Props = {
  posts: Post[];
};

const Blogs = ({ posts }: Props) => {
  return (
    <ul
      id="blogs"
      className="h-full gap-y-6 grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense 
      md:px-16 md:gap-10 md:gap-y-16 md:pb-24 md:h-full md:py-10 box-border "
    >
      {posts.map((post, idx) => (
        <BlogItem key={post._id} post={post} idx={idx} />
      ))}
    </ul>
  );
};

export default Blogs;
