import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "../../components/Blog/PreviewBlogList";
import PreviewSuspense from "../../components/Blog/PreviewSuspense";
import BlogList from "../../components/Blog/BlogList";

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
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  return (
    <main className="bg-[#EBECF0] dark:bg-black">
      <section className=" ts-color bg-background h-full w-full lg:px-[200px]">
        <BlogList posts={posts} />
      </section>
    </main>
  );
};

export default Writing;
