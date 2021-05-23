import { createGitgraph } from "@gitgraph/js";

export const graphContainer = document.getElementById("graph-container");

if (!graphContainer) {
  throw new Error("Cannot find rendering target!");
}

export const gitgraph = createGitgraph(graphContainer);
