import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogs from "../../components/Blog/PreviewBlogs";
import PreviewSuspense from "../../components/Blog/PreviewSuspense";
import Blogs from "../../components/Blog/Blogs";

const query = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
  | order(_createdAt desc)
}
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
    <main className="h-full bg-[#EBECF0] dark:bg-black">
      <section className=" bg-background h-full w-full lg:px-[180px]">
        <Blogs posts={posts} />
      </section>
    </main>
  );
};

export default Writing;
