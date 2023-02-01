interface CodeInputProps {
  code: string;
  language: string;
}

const CodeHighlight: React.FC<CodeInputProps> = (props) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;
