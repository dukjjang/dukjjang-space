"use client";

import Link from "next/link";

const BlogDetailTextStyle = {
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
      <h1 className="text-4xl py-3 font-bold text-slate-800  dark:text-slate-200 ">
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
      const rel = !value.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline text-green-400 dark:text-blue-500 "
        >
          {children}
        </Link>
      );
    },
  },
};

export default BlogDetailTextStyle;
