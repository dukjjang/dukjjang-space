"use client";

import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";
import { useTheme } from "@wits/next-themes";
import { githubLight, ecoLight } from "@codesandbox/sandpack-themes";

const CustomSandpack = ({ language, file }) => {
  const { theme } = useTheme();

  return (
    <SandpackProvider
      customSetup={{
        entry: "/index.js",
        environment: "create-react-app",

        dependencies: {
          react: "^18.2.0",
          "react-dom": "^18.2.0",
          "react-scripts": "^5.0.1",
          "framer-motion": "^8.5.0",
        },
      }}
      template="react"
      files={{
        "/App.js": `${file}`,
      }}
      options={{
        visibleFiles: ["/App.js"],
        activeFile: "/App.js",
      }}
      style={{ margin: "40px 0px" }}
    >
      <SandpackThemeProvider theme={theme === "dark" ? ecoLight : githubLight}>
        <div className="relative pt-7 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl">
          <div className="absolute left-3 top-2 flex gap-2">
            <div className="p-[6px] bg-red-500 top-0 left-0  rounded-full" />
            <div className="p-[6px] bg-yellow-500 top-0 left-0 rounded-full" />
            <div className="p-[6px] bg-green-500 top-0 left-0 rounded-full" />
          </div>
          {!file.match("//previewOnly") && (
            <SandpackCodeEditor
              showLineNumbers={false}
              showInlineErrors
              wrapContent
              closableTabs
            />
          )}
          {file.match("//preview") && (
            <SandpackPreview
              showOpenInCodeSandbox={false}
              showRefreshButton={true}
              style={{
                height: "300px",
                borderTop: "1px solid rgba(0,0,0,0.2)",
              }}
            />
          )}
        </div>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};

export default CustomSandpack;
