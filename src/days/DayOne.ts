import FileReader from "../FileReader";
import Day from "./Day";

export default class DayOne implements Day{
    getPartOne = (): number => {
        const data = FileReader.getNumericData("dayOne");
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[i] + data[j] === 2020) {
                    return data[i] + data[j];
                }
            }
        }
        throw new Error("Not found");
    }

    getPartTwo = (): number => {
        const data = FileReader.getNumericData("dayOne");
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                for (let k = 0; k < data.length; k++)
                if (data[i] + data[j] + data[k] === 2020) {
                    return data[i] + data[j] + data[k];
                }
            }
        }
        throw new Error("Not found");
    }
}