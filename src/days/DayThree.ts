import FileReader from "../FileReader";
import Day from "./Day";

type Square = "#" | "."

type Row = {
    squares: Square[];
}

type Grid = {
    rows: Row[];
}

export default class DayThree implements Day {
    private grid: Grid;
    constructor() {
        this.grid = this.getParsedInput();
    }

    private getParsedInput = (): Grid => {
        const data = FileReader.getStringData("dayThree");
        return {
            rows: data.map(rowData => {

                const chars = rowData.split("") as  Square[];
                return {
                    squares: chars
                }
            })
        }
    }

    private getTreesForSlope = (xIncrement: number, yIncrement: number): number => {
        let currentX = xIncrement;
        let treeCount = 0;
        for(let y = yIncrement; y < this.grid.rows.length; y=y+ yIncrement) {
            const row = this.grid.rows[y];
            if (currentX >= row.squares.length) {
                currentX = currentX - row.squares.length;
            }
            if (row.squares[currentX] === "#") {
                treeCount++;
            }
            currentX = currentX += xIncrement;
        }
        return treeCount;
    }

    getPartOne = (): number => {

        return this.getTreesForSlope(3, 1);
    }

    getPartTwo = (): number => {
        return (
            this.getTreesForSlope(1,1) *
            this.getTreesForSlope(3,1) *
            this.getTreesForSlope(5,1) *
            this.getTreesForSlope(7,1) *
            this.getTreesForSlope(1,2)
        )
    }
} 
