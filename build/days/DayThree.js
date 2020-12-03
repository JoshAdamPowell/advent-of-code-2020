"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileReader_1 = __importDefault(require("../FileReader"));
var DayThree = /** @class */ (function () {
    function DayThree() {
        var _this = this;
        this.getParsedInput = function () {
            var data = FileReader_1.default.getStringData("dayThree");
            return {
                rows: data.map(function (rowData) {
                    var chars = rowData.split("");
                    return {
                        squares: chars
                    };
                })
            };
        };
        this.getTreesForSlope = function (xIncrement, yIncrement) {
            var currentX = xIncrement;
            var treeCount = 0;
            for (var y = yIncrement; y < _this.grid.rows.length; y = y + yIncrement) {
                var row = _this.grid.rows[y];
                if (currentX >= row.squares.length) {
                    currentX = currentX - row.squares.length;
                }
                if (row.squares[currentX] === "#") {
                    treeCount++;
                }
                currentX = currentX += xIncrement;
            }
            return treeCount;
        };
        this.getPartOne = function () {
            return _this.getTreesForSlope(3, 1);
        };
        this.getPartTwo = function () {
            return (_this.getTreesForSlope(1, 1) *
                _this.getTreesForSlope(3, 1) *
                _this.getTreesForSlope(5, 1) *
                _this.getTreesForSlope(7, 1) *
                _this.getTreesForSlope(1, 2));
        };
        this.grid = this.getParsedInput();
    }
    return DayThree;
}());
exports.default = DayThree;
