"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph(graph, start) {
        this.graph = graph;
        this.start = start;
        this.distancies = {};
        this.steps = [];
    }
    Graph.prototype.getBelman = function () {
        var _this = this;
        this.setDefaultDistancies();
        this.graph.forEach(function (_a) {
            var from = _a[0], to = _a[1], value = _a[2];
            _this.doStep(from, to, +value);
        });
        for (var i = 0; i < this.graph.length; i++) {
            var _a = this.graph[i], from = _a[0], to = _a[1], value = _a[2];
            this.doStep(from, to, +value);
        }
        console.log(this.steps);
        return {
            distancies: this.distancies,
            steps: this.steps,
        };
    };
    Graph.prototype.setDefaultDistancies = function () {
        var _this = this;
        var vertices = new Set();
        for (var i = 0; i < this.graph.length; i++) {
            var _a = this.graph[i], start = _a[0], end = _a[1];
            vertices.add(start);
            vertices.add(end);
        }
        // for (const vertex of vertices) {
        // }
        vertices.forEach(function (vertex) {
            _this.distancies[vertex] = Infinity;
        });
        this.distancies[this.start] = 0;
    };
    Graph.prototype.doStep = function (from, to, value) {
        if (this.distancies[from] + value < this.distancies[to] &&
            this.distancies[from] !== Infinity) {
            this.distancies[to] = this.distancies[from] + value;
            this.steps.push({
                from: from,
                to: to,
                comment: "".concat(from, " -> ").concat(to, " = ").concat(this.distancies[to]),
                currentDistancies: __assign({}, this.distancies),
            });
            return false;
        }
        else if (this.distancies[from] + value < this.distancies[to] &&
            this.distancies[from] === Infinity) {
            this.distancies[to] = this.distancies[from] + value;
            this.steps.push({
                from: from,
                to: to,
                comment: "".concat(from, " -> ").concat(to, " = ").concat(this.distancies[to]),
                currentDistancies: __assign({}, this.distancies),
            });
            console.log("Alert! Infinity!");
            return true;
        }
        else {
            this.steps.push({
                from: from,
                to: to,
                comment: "\u041C\u0438 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u043C \u0442\u0430\u043A, \u044F\u043A \u043A\u0456\u043D\u0446\u0435\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043D\u0435 \u0431\u0443\u0434\u0435 \u043C\u0435\u043D\u0448\u0438\u043C",
                currentDistancies: __assign({}, this.distancies),
            });
            return false;
        }
    };
    return Graph;
}());
exports.Graph = Graph;
