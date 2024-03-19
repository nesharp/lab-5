type IGraphResult = string[][];
export class Graph {
  graph: Record<string, Record<string, string>>;
  start: string;
  distances: Record<string, number>;
  results: IGraphResult[];
  constructor(graph: Record<string, Record<string, string>>, start: string) {
    this.graph = graph;
    this.start = start;
    this.distances = {};
    this.results = [[[this.start]]];
    Object.keys(this.graph).forEach((node) => {
      if (node === this.start) {
        this.distances[node] = 0;
      }
      this.distances[node] = Infinity;
    });
  }
  distancies() {
    const keys = new Set<string>();
    Object.keys(this.graph).forEach((key) => {
      keys.add(key);
      Object.keys(this.graph[key]).forEach((key) => {
        keys.add(key);
      });
    });

    keys.forEach((key:any) => {
      this.distances[key] = this.getLength(key);
    });
    return this.distances;
  }
  dijkstra() {
    const queue: string[] = [this.start];
    const visited = new Set(queue);
    while (queue.length > 0) {
      const cursor = queue[0];
      const nodes = this.graph[cursor];
      if (nodes === undefined) {
        queue.shift();
        continue;
      }
      visited.add(queue[0]);
      //logic
      const result: string[][] = [];
      Object.keys(nodes).forEach((node) => {
        result.push([cursor, node]);
      });
      if (this.results.length - 1 === 0) {
        this.results.push([...result]);
      } else {
        this.results.push([
          ...this.results[this.results.length - 1],
          ...result,
        ]);
      }
      // //logic
      Object.keys(nodes).forEach((node) => {
        if (!queue.includes(node) && !visited.has(node)) {
          queue.push(node);
        }
      });
      queue.shift();
    }
    return this.results;
  }
  getLength(to: string) {
    const path: string[] = this.getPath(to) || [];
    let sum = path.reduce((acc, cur, i) => {
      if (i === 0) {
        return 0;
      }
      return acc + Number(this.graph[path[i - 1]][cur]);
    }, 0);

    return sum;
  }
  private getPath(to: string) {
    const queue: { node: string; path: string[] }[] = [];
    const visited: Set<string> = new Set();

    queue.push({ node: this.start, path: [this.start] });
    visited.add(this.start);

    while (queue.length > 0) {
      const { node, path } = queue.shift()!;
      if (node === to) {
        return path;
      }

      const neighbors = this.graph[node];
      for (const neighbor in neighbors) {
        if (!visited.has(neighbor)) {
          const newPath = [...path, neighbor];
          queue.push({ node: neighbor, path: newPath });
          visited.add(neighbor);
        }
      }
    }
  }
}
