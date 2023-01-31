import { client } from "../../../lib/sanity.client";
import BlogDetailItem from "../../../ui/BlogDetailItem";

const BlogDetail = async ({ params }) => {
  const post = await client.fetch(`*[slug.current == "${params.id}"]{
  ...,
  author->,
  categories[]->
} `);

  console.log("포스트", post);
  return <BlogDetailItem post={post[0]} />;
};

export default BlogDetail;
