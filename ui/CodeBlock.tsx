"use client";

import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ value }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error("faild copy", err);
      setIsCopied(false);
    }
  };

  return (
    <div
      className="bg-[#303136]/60 dark:bg-[#303136]/70  h-fit p-3 
      rounded-md w-full flex flex-col justify-center pb-6 [&_code]:!text-[0.9rem] [&_code]:!font-semibold "
    >
      <button
        type="button"
        className="self-end mr-5 px-2 py-1 bg-transparent  "
        onClick={handleCopyCode}
      >
        <h4 className="text-gradient opacity-60 hover:opacity-100  text-md">
          {isCopied ? "copied" : "copy"}
        </h4>
      </button>
      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "20px",
          border: "0px",
        }}
        language={value.language}
        style={xonokai}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
