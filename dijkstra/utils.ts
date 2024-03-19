import { graph as graphInstance } from "./settings";
export const convertToDeikstra = (graph: typeof graphInstance) => {
  const graphObj: Record<string, any> = {};
  for (let i = 0; i < graph.length; i++) {
    const [start, end, value] = graph[i];
    if (!graphObj[start]) {
      graphObj[start] = {};
    }
    // if (!graphObj[end]) {
    //   graphObj[end] = {};
    // }
    graphObj[start][end] = value;
    // graphObj[end][start] = value;
  }
  return graphObj;
};
export const convertToString = (graph: typeof graphInstance) => {
  return graph.map((el) => el.join(" ")).join("\n");
};
