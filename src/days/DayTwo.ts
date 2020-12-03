import FileReader from "../FileReader";
import Day from "./Day";

type PasswordDetails = {
    min: number;
    max: number;
    letter: string;
    password: string
}

export default class DayTwo implements Day {

    private isValidPassword = ({min, max, letter, password}: PasswordDetails): boolean => {
        if (!password) {
            return false;
        }
        const chars = password.split("");
        const letterCount = chars.filter(c => c === letter).length;
        return (letterCount >= min && letterCount <= max)
    }

    private isActuallyValid = ({min, max, letter, password}: PasswordDetails): boolean => {
        if (!password) {
            return false;
        }
        const chars = password.split("");
        const pos1 = chars[min] === letter;
        const pos2 = chars[max] === letter;
        const valid = (pos1 && !pos2) || (!pos1 && pos2);
        console.log(min, max, letter, password, valid, pos1, pos2);
        return valid; 

    } 

    private parseString = (input: string): PasswordDetails => {
        const [remainder, password] = input.split(":");
        const [remainder2, letter] = remainder.split(" ");
        const [min, max] = remainder2.split("-");

        return {
            password,
            letter,
            min: parseInt(min),
            max: parseInt(max)
        }

    }


    getPartOne = (): number => {
        const data = FileReader.getStringData("dayTwo");
        const passwords = data.map(d => this.parseString(d));
        const valids = passwords.filter(this.isValidPassword);
        return valids.length;
    }

    getPartTwo = (): number => {
        const data = FileReader.getStringData("dayTwo");
        const passwords = data.map(d => this.parseString(d));
        const valids = passwords.filter(this.isActuallyValid);
        return valids.length;
    }
 }