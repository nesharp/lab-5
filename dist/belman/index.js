"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBelman = void 0;
var belman_1 = require("./classes/belman");
var getBelman = function (graph, start) {
    var graphInstance = new belman_1.Graph(graph, start);
    return graphInstance.getBelman();
};
exports.getBelman = getBelman;
