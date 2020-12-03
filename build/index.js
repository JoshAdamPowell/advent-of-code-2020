"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DayThree_1 = __importDefault(require("./days/DayThree"));
var currentDay = new DayThree_1.default();
try {
    var partOne = currentDay.getPartOne();
    console.log("Result for part one:");
    console.log(partOne);
}
catch (e) {
    console.log("Error with part one: " + e);
}
try {
    var partTwo = currentDay.getPartTwo();
    console.log("Result for part two:");
    console.log(partTwo);
}
catch (e) {
    console.log("Error with part two: " + e);
}
console.log("complete");
