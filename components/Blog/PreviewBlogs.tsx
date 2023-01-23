"use client";

import { usePreview } from "../../lib/sanity.preview";
import Blogs from "./Blogs";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  return <Blogs posts={posts} />;
}
