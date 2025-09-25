import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { getDefaultDocumentNode } from "./structure";
import { codeInput } from "@sanity/code-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Dukjjang_Studio",
  title: "Dukjjang_Studio",
  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
    vercelDeployTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
