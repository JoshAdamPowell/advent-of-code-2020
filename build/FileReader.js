"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.getStringData = function (fileName) {
        var path = "src/data/" + fileName + ".txt";
        var file = fs_1.default.readFileSync(path, "utf-8");
        var regex = /\n/;
        return file.split(regex);
    };
    FileReader.getNumericData = function (fileName) {
        var stringData = FileReader.getStringData(fileName);
        return stringData.map(function (d) { return parseInt(d); });
    };
    return FileReader;
}());
exports.default = FileReader;
