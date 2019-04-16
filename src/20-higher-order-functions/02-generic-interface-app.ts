import { print } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

let main = async () => {
    let input = listify(-2, -1, 0, 1, 2);
    let output = filter(input, isPositive);
    print(output);

    // TODO #3 uncomment and use the generic filter function
    let words = listify("The", "quick", "brown", "fox");
    // print(filter(words, is3Letters));
};

// Predicates "Test Functions"
let isPositive = (item: number): boolean => { return item > 0; };
let is3Letters = (item: string): boolean => { return item.length === 3; };
let startsWithB = (item: string): boolean => { return item[0] === "b"; };

// TODO #1: Make the Predicate interface generic
interface Predicate {
    (item: number): boolean;
}

// TODO #2: Make the filter function generic
let filter = (xs: Node<number>, test: Predicate): Node<number> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

main();