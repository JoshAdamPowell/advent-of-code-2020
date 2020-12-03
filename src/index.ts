import DayOne from "./days/DayOne";
import DayTwo from "./days/DayTwo";

const currentDay = new DayTwo();

try {
    const partOne = currentDay.getPartOne();
    console.log("Result for part one:")
    console.log(partOne);
} catch(e) {
    console.log(`Error with part one: ${e}`)
}

try {
    const partTwo = currentDay.getPartTwo();
    console.log("Result for part two:")
    console.log(partTwo);
} catch(e) {
    console.log(`Error with part two: ${e}`)
}

console.log("complete");