"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToDeikstra = void 0;
var convertToDeikstra = function (graph) {
    var graphObj = {};
    for (var i = 0; i < graph.length; i++) {
        var _a = graph[i], start = _a[0], end = _a[1], value = _a[2];
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
exports.convertToDeikstra = convertToDeikstra;
