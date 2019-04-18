import { print, csvToList } from "introcs";
import { Node, cons, first, rest } from "introcs/list";
import { Game } from "./Game";

/**
 * Transform is any function that takes a single value and 
 * returns another value.
 */
interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let games: Node<Game> = await csvToList("Select Games Data", Game);

    // TODO #2 - Assign to points the result of calling map with
    // the games List and the gameToPoints function you wrote below.
    let points: Node<number> = null;

    print("Berry's Points:");
    print(points);
};

// TODO #1: Define a function named gameToPoints
// It should take in a Game object as a parameter and return a number
// The number it returns should be the Game's points property

/**
 * Given a list of values, map will return a new list of values with
 * the function f applied to every element in the original list.
 */
let map = <T, U> (xs: Node<T>, f: Transform<T, U>): Node<U> => {
    if (xs === null) {
        return null;
    } else {
        return cons(f(first(xs)), map(rest(xs), f));
    }
};

main();