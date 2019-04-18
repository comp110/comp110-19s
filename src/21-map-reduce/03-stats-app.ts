import { print, csvToArray } from "introcs";
import { Node } from "introcs/list";
import { Game } from "./Game";

export let main = async () => {
    let games: Game[] = await csvToArray("Game Data", Game);

    // TODO #2 filter
    let filtered: Game[] = null;
    
    // TODO #3 map
    let values: number[] = null;
    
    // TODO #4 reduce
    let result: number = 0;

    print("Result: " + result);
};

// Predicates
let isWin = (g: Game): boolean => {
    return g.outcome[0] === "W";
};

let fewPoints = (g: Game): boolean => {
    return g.points < 15;
};

// Transforms
let toPoints = (g: Game): number => {
    return g.points;
};

let toAssists = (g: Game): number => {
    return g.assists;
};

// Reducers
let sum = (m: number, n: number): number => {
    return m + n;
};

let max = (m: number, n: number): number => {
    if (m > n) {
        return m;
    } else {
        return n;
    }
};

main();