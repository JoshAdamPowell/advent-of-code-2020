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
            var result;
            data.forEach(function (num1) {
                data.forEach(function (num2) {
                    if (num1 + num2 === 2020) {
                        result = num1 * num2;
                    }
                });
            });
            return result;
        };
        this.getPartTwo = function () {
            var data = FileReader_1.default.getNumericData("dayOne");
            var result;
            data.forEach(function (num1) {
                data.forEach(function (num2) {
                    data.forEach(function (num3) {
                        if (num1 + num2 + num3 === 2020) {
                            result = num1 * num2 * num3;
                        }
                    });
                });
            });
            return result;
        };
    }
    return DayOne;
}());
exports.default = DayOne;
