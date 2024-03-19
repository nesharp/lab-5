import { Graph } from "./dijkstra";
import { convertToDeikstra, convertToString } from "./utils";
import { graph } from "./settings";
export const getDeikstra = (incomeGraph: string[][], start: string) => {
  const newGraph = incomeGraph.map(([from, to, val]) => [
    from,
    to,
    val || Math.floor(Math.random() * 9 + 1).toString(),
  ]);
  const transformedGraph: Record<
    string,
    Record<string, string>
  > = convertToDeikstra(newGraph);
  const graph = new Graph(transformedGraph, start);
  return {
    distancies: graph.distancies(),
    dijkstra: graph.dijkstra(),
  };
};
