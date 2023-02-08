"use client";

import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";
import { useTheme } from "@wits/next-themes";
import { githubLight, oceanBlue } from "@codesandbox/sandpack-themes";

const CustomSandpack = ({ language, file }) => {
  const { theme } = useTheme();

  return (
    <SandpackProvider
      template="react"
      files={{
        "/App.js": `${file}`,
      }}
    >
      <SandpackThemeProvider theme={theme === "dark" ? oceanBlue : githubLight}>
        <div className="pt-7 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl">
          <SandpackCodeEditor
            showLineNumbers={false}
            showInlineErrors
            wrapContent
            closableTabs
          />
          {language === "jsx" && (
            <SandpackPreview
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
              style={{ height: "300px", marginTop: "32px" }}
            />
          )}
        </div>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};

export default CustomSandpack;
