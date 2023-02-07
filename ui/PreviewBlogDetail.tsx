"use client";

import { usePreview } from "../lib/sanity.preview";
import BlogDetailItem from "./BlogDetailItem";

type Props = {
  query: string;
  nextPath: string;
  prevPath: string;
  slug: string;
};

export default function PreviewBlogDetail({
  query,
  nextPath,
  prevPath,
  slug,
}: Props) {
  const post = usePreview(null, query, { slug });

  return <BlogDetailItem nextPath={nextPath} prevPath={prevPath} post={post} />;
}
