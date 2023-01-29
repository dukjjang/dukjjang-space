import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../shared/lib/sanity.client";
import PreviewBlogs from "../shared/components/Blog/PreviewBlogs";
import PreviewSuspense from "../shared/components/Blog/PreviewSuspense";
import Blogs from "../shared/components/Blog/Blogs";
import Header from "../shared/components/Header";

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
    <main id="writing" className="h-full bg-background">
      <Header />
      <section className="bg-background h-full w-full mt-3 lg:px-[180px]">
        <Blogs posts={posts} />
      </section>
    </main>
  );
};

export default Writing;
