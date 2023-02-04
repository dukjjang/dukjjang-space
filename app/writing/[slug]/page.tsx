import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogDetailItem from "../../../ui/BlogDetailItem";
import Stars from "../../../ui/Stars";

const allPostQuery = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export async function generateStaticParams() {
  const posts = await client.fetch(allPostQuery);

  // Generate two pages at build time and the rest (3-100) on-demand
  return posts.map((post: Post) => {
    return { slug: post.slug.current };
  });
}

const DetailPage = async ({ params }: any) => {
  const post = await client.fetch(`*[slug.current == "${params.slug}"][0]{
  ...,
  author->,
  categories[]->
} `);

  return (
    <main>
      <BlogDetailItem post={post} />
    </main>
  );
};

export default DetailPage;
