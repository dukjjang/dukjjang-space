import Img from "next/image";
import urlFor from "../../lib/urlFor";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  console.log("hello world", posts);
  return (
    <ul>
      {posts.map((post) => (
        <li className="group flex flex-col cursor-pointer" key={post._id}>
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Img
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
