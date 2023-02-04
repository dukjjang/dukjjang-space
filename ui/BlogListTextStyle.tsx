const BlogListTextStyle = {
  block: ({ children }: any) => (
    <p className="inline text-ellipsis">{children}</p>
  ),
  marks: {
    strong: ({ children, value }: any) => {
      return <strong>{children}</strong>;
    },
  },
};

export default BlogListTextStyle;
