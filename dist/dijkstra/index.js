"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeikstra = void 0;
var dijkstra_1 = require("./dijkstra");
var utils_1 = require("./utils");
var getDeikstra = function (incomeGraph, start) {
    var newGraph = incomeGraph.map(function (_a) {
        var from = _a[0], to = _a[1], val = _a[2];
        return [
            from,
            to,
            val || Math.floor(Math.random() * 9 + 1).toString(),
        ];
    });
    var transformedGraph = (0, utils_1.convertToDeikstra)(newGraph);
    var graph = new dijkstra_1.Graph(transformedGraph, start);
    return {
        distancies: graph.distancies(),
        dijkstra: graph.dijkstra(),
    };
};
exports.getDeikstra = getDeikstra;
