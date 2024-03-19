import { Graph } from "./classes/belman";
import { graph } from "./settings";
import { convertToString, transformGraph } from "./utils";

export const getBelman = (graph: string[][], start: string) => {
  const graphInstance = new Graph(graph, start);
  return graphInstance.getBelman();
};
