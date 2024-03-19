import { graph as graphInstance } from "./settings";
export const convertToString = (graph: typeof graphInstance) => {
  return graph.map((el) => el.join(" ")).join("\n");
};
export const transformGraph = (graph: typeof graphInstance) => {
  return graph.map(([from, to, value]) => [from, to, +value]);
};
