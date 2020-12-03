"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileReader_1 = __importDefault(require("../FileReader"));
var DayTwo = /** @class */ (function () {
    function DayTwo() {
        var _this = this;
        this.isValidPassword = function (_a) {
            var min = _a.min, max = _a.max, letter = _a.letter, password = _a.password;
            if (!password) {
                return false;
            }
            var chars = password.split("");
            var letterCount = chars.filter(function (c) { return c === letter; }).length;
            return (letterCount >= min && letterCount <= max);
        };
        this.isActuallyValid = function (_a) {
            var min = _a.min, max = _a.max, letter = _a.letter, password = _a.password;
            if (!password) {
                return false;
            }
            var chars = password.split("");
            var pos1 = chars[min] === letter;
            var pos2 = chars[max] === letter;
            var valid = (pos1 && !pos2) || (!pos1 && pos2);
            console.log(min, max, letter, password, valid, pos1, pos2);
            return valid;
        };
        this.parseString = function (input) {
            var _a = input.split(":"), remainder = _a[0], password = _a[1];
            var _b = remainder.split(" "), remainder2 = _b[0], letter = _b[1];
            var _c = remainder2.split("-"), min = _c[0], max = _c[1];
            return {
                password: password,
                letter: letter,
                min: parseInt(min),
                max: parseInt(max)
            };
        };
        this.getPartOne = function () {
            var data = FileReader_1.default.getStringData("dayTwo");
            var passwords = data.map(function (d) { return _this.parseString(d); });
            var valids = passwords.filter(_this.isValidPassword);
            return valids.length;
        };
        this.getPartTwo = function () {
            var data = FileReader_1.default.getStringData("dayTwo");
            var passwords = data.map(function (d) { return _this.parseString(d); });
            var valids = passwords.filter(_this.isActuallyValid);
            return valids.length;
        };
    }
    return DayTwo;
}());
exports.default = DayTwo;
