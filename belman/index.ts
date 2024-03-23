import { Graph } from "./classes/belman";
export const getBelman = (graph: string[][], start: string) => {
  const graphInstance = new Graph(graph, start);
  return graphInstance.getBelman();
};
