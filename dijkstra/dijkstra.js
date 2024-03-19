"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph(graph, start) {
        var _this = this;
        this.graph = graph;
        this.start = start;
        this.distances = {};
        this.results = [[[this.start]]];
        Object.keys(this.graph).forEach(function (node) {
            if (node === _this.start) {
                _this.distances[node] = 0;
            }
            _this.distances[node] = Infinity;
        });
    }
    Graph.prototype.distancies = function () {
        var _this = this;
        Object.keys(this.distances).forEach(function (key) {
            _this.distances[key] = _this.getLength(key);
        });
        return this.distances;
    };
    Graph.prototype.dijkstra = function () {
        var queue = [this.start];
        var visited = new Set(queue);
        var _loop_1 = function () {
            var cursor = queue[0];
            var nodes = this_1.graph[cursor];
            if (nodes === undefined) {
                queue.shift();
                return "continue";
            }
            visited.add(queue[0]);
            //logic
            var result = [];
            Object.keys(nodes).forEach(function (node) {
                result.push([cursor, node]);
            });
            if (this_1.results.length - 1 === 0) {
                this_1.results.push(__spreadArray([], result, true));
            }
            else {
                this_1.results.push(__spreadArray(__spreadArray([], this_1.results[this_1.results.length - 1], true), result, true));
            }
            // //logic
            Object.keys(nodes).forEach(function (node) {
                if (!queue.includes(node) && !visited.has(node)) {
                    queue.push(node);
                }
            });
            queue.shift();
        };
        var this_1 = this;
        while (queue.length > 0) {
            _loop_1();
        }
        return this.results;
    };
    Graph.prototype.getLength = function (to) {
        var _this = this;
        var path = this.getPath(to) || [];
        var sum = path.reduce(function (acc, cur, i) {
            if (i === 0) {
                return 0;
            }
            return acc + Number(_this.graph[path[i - 1]][cur]);
        }, 0);
        return sum;
    };
    Graph.prototype.getPath = function (to) {
        var queue = [];
        var visited = new Set();
        queue.push({ node: this.start, path: [this.start] });
        visited.add(this.start);
        while (queue.length > 0) {
            var _a = queue.shift(), node = _a.node, path = _a.path;
            if (node === to) {
                return path;
            }
            var neighbors = this.graph[node];
            for (var neighbor in neighbors) {
                if (!visited.has(neighbor)) {
                    var newPath = __spreadArray(__spreadArray([], path, true), [neighbor], false);
                    queue.push({ node: neighbor, path: newPath });
                    visited.add(neighbor);
                }
            }
        }
    };
    return Graph;
}());
exports.Graph = Graph;
