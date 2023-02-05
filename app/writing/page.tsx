import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogs from "../../ui/PreviewBlogs";
import PreviewSuspense from "../../ui/PreviewSuspense";
import Blogs from "../../ui/Blogs";
import Stars from "../../ui/Stars";
import Footer from "../../ui/Footer";

const query = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Writing = async () => {
  const posts = await client.fetch(query);

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogs query={query} />
      </PreviewSuspense>
    );
  }

  return (
    <main
      id="writing"
      className="relative w-full min-h-screen bg-background overflow-x-hidden"
    >
      <Stars />
      <section className="h-fit mt-32 w-full lg:px-[180px] bg-background">
        <Blogs posts={posts} />
      </section>
    </main>
  );
};

export default Writing;
