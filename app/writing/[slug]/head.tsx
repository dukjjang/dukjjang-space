import { client } from "../../../lib/sanity.client";
import urlFor from "../../../lib/urlFor";
import DefaultTags from "../../shard/DefaultTags";

const postQuery = `*[slug.current == $slug][0]{
title,mainImage,slug,description
} `;

export default async function Head({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(postQuery, { slug });
  return (
    <>
      <DefaultTags />
      <title>{`${post.title} - Dukjjang`}</title>
      <meta name="description" content={`${post.description}`} />
      <meta property="og:title" content={`${post.title} - Dukjjang`} />
      <meta property="og:description" content={`${post.description}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.dukjjang.space/writing/${post.slug.current}`}
      />
      <meta
        property="og:image"
        content={post.mainImage ? urlFor(post.mainImage).url() : ""}
      />
      <meta property="og:article:author" content="Dukjjang" />
    </>
  );
}
