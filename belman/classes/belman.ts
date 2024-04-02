interface IStep {
  from: string;
  to: string;
  comment: string;
  currentDistancies: Record<string, number>;
}
export class Graph {
  private graph: string[][];
  private start: string;
  private distancies: Record<string, number>;
  private steps: IStep[];
  constructor(graph: string[][], start: string) {
    this.graph = graph;
    this.start = start;
    this.distancies = {};
    this.steps = [];
  }
  public getBelman() {
    this.setDefaultDistancies();
    this.graph.forEach(([from, to, value]) => {
      this.doStep(from, to, +value);
    });
    for (let i = 0; i < this.graph.length; i++) {
      const [from, to, value] = this.graph[i];
      this.doStep(from, to, +value);
    }
    console.log(this.steps);
    return {
      distancies: this.distancies,
      steps: this.steps,
    };
  }
  private setDefaultDistancies() {
    const vertices = new Set<string>();
    for (let i = 0; i < this.graph.length; i++) {
      const [start, end] = this.graph[i];
      vertices.add(start as string);
      vertices.add(end as string);
    }
    // for (const vertex of vertices) {
    // }
    vertices.forEach((vertex) => {
      this.distancies[vertex] = Infinity;
    });
    this.distancies[this.start] = 0;
  }
  private doStep(from: string, to: string, value: number) {
    if (
      this.distancies[from] + value < this.distancies[to] &&
      this.distancies[from] !== Infinity
    ) {
      this.distancies[to] = this.distancies[from] + value;
      this.steps.push({
        from,
        to,
        comment: `${from}->${to} = ${this.distancies[to]} \nПояснення:\nЙдемо від вершини ${from}, яку ми отримали підетапом раніше.Далі йдемо до вершини ${from} і змінюємо її значення на ${this.distancies[from]}`,
        currentDistancies: { ...this.distancies },
      });
      return false;
    } else if (
      this.distancies[from] + value < this.distancies[to] &&
      this.distancies[from] === Infinity
    ) {
      this.distancies[to] = this.distancies[from] + value;
      this.steps.push({
        from,
        to,
        // comment: `М${from} -> ${to} = ${this.distancies[to]}`,
        comment: `${from}->${to} = ${this.distancies[to]} \nПояснення:\тЙдемо від вершини ${from}, яку ми отримали підетапом раніше.Далі йдемо до вершини $${from} і змінюємо її значення на ${this.distancies[from]}`,
        currentDistancies: { ...this.distancies },
      });
      console.log("Alert! Infinity!");
      return true;
    } else {
      this.steps.push({
        from,
        to,
        comment: `Ми не змінюєм так, як кінцеве значення не буде меншим`,
        currentDistancies: { ...this.distancies },
      });
      return false;
    }
  }
}
