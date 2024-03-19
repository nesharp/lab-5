"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformGraph = exports.convertToString = void 0;
var convertToString = function (graph) {
    return graph.map(function (el) { return el.join(" "); }).join("\n");
};
exports.convertToString = convertToString;
var transformGraph = function (graph) {
    return graph.map(function (_a) {
        var from = _a[0], to = _a[1], value = _a[2];
        return [from, to, +value];
    });
};
exports.transformGraph = transformGraph;
