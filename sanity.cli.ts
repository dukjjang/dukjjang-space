import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLICK_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLICK_SANITY_DATASET!;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
