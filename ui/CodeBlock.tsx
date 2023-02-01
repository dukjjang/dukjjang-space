"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ value }: any) => {
  return (
    <SyntaxHighlighter language={value.language} style={materialOceanic}>
      {value.code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
