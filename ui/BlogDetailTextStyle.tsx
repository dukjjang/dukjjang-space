import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import CodeBlock from "./CodeBlock";

const BlogDetailTextStyle = {
  types: {
    code: ({ value }) => {
      return <CodeBlock value={value} />;
    },
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-3 font-bold text-slate-800 dark:text-slate-200 ">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-3xl py-3 font-bold text-slate-800 dark:text-slate-200">
        {children}
      </h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="text-2xl py-3 font-bold text-slate-800 dark:text-slate-200">
        {children}
      </h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="text-xl py-3 font-bold dark:text-slate-200">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-green-400 dark:border-l-blue-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-green-500 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default BlogDetailTextStyle;
