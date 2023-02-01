import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogDetailItem from "../../../ui/BlogDetailItem";

const allPostQuery = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const postQuery = groq`
*[_type=='post' && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->
} 
`;

export async function generateStaticParams() {
  const posts = await client.fetch(allPostQuery);

  // Generate two pages at build time and the rest (3-100) on-demand
  return posts.map((post: Post) => {
    return { slug: post.slug.current };
  });
}

const BlogDetail = async ({ params }: any) => {
  const post = await client.fetch(postQuery, params.slug);

  return <BlogDetailItem post={post} />;
};

export default BlogDetail;
