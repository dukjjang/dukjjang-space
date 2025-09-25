import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import { client } from "../../../lib/sanity.client";
import BlogDetailItem from "../../../ui/BlogDetailItem";
import PreviewBlogDetail from "../../../ui/PreviewBlogDetail";
import PreviewSuspense from "../../../ui/PreviewSuspense";
import Stars from "../../../ui/Stars";

const allPostQuery = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const nextPostQuery = `*[_type == "post" && $createdAt < _createdAt] 
| order(_createdAt asc) [0] { slug }`;

const prevPostQuery = `*[_type == "post" && $createdAt > _createdAt ] 
| order(_createdAt desc) [0] { slug }`;

const postQuery = `*[slug.current == $slug][0]{
  ...,
  author->,
  categories[]->
} `;

export async function generateStaticParams() {
  const posts = await client.fetch(allPostQuery);

  return posts.map((post: Post) => {
    return { slug: post.slug.current };
  });
}

const DetailPage = async (props: any) => {
  const params = await props.params;

  const {
    slug
  } = params;

  const post = await client.fetch(postQuery, { slug });
  const createdAt = post._createdAt;
  const nextPost = await client.fetch(nextPostQuery, {
    createdAt,
  });
  const prevPost = await client.fetch(prevPostQuery, {
    createdAt,
  });

  const nextPath = nextPost?.slug?.current ?? null;
  const prevPath = prevPost?.slug?.current ?? null;

  if (draftMode().isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogDetail
          query={postQuery}
          nextPath={nextPath}
          prevPath={prevPath}
          slug={slug}
        />
      </PreviewSuspense>
    );
  }

  return (
    <main className="min-h-screen relatvie pt-[88px] overflow-x-hidden pb-20">
      <BlogDetailItem nextPath={nextPath} prevPath={prevPath} post={post} />
      <Stars />
    </main>
  );
};

export default DetailPage;
