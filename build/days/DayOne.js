"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileReader_1 = __importDefault(require("../FileReader"));
var DayOne = /** @class */ (function () {
    function DayOne() {
        this.getPartOne = function () {
            var data = FileReader_1.default.getNumericData("dayOne");
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    if (data[i] + data[j] === 2020) {
                        return data[i] + data[j];
                    }
                }
            }
            throw new Error("Not found");
        };
        this.getPartTwo = function () {
            var data = FileReader_1.default.getNumericData("dayOne");
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    for (var k = 0; k < data.length; k++)
                        if (data[i] + data[j] + data[k] === 2020) {
                            return data[i] + data[j] + data[k];
                        }
                }
            }
            throw new Error("Not found");
        };
    }
    return DayOne;
}());
exports.default = DayOne;
