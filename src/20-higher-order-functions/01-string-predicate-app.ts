import { print } from "introcs";
import { Node, cons, first, rest, listify } from "introcs/list";

let main = async () => {
    let input = listify(
        "the",
        "quick",
        "brown",
        "fox",
        "jumped",
        "over",
        "the",
        "lazy",
        "dog"
    );

    // TODO #2: Change the predicate function to use longWords
    let output = filter(input, startsWithT);
    print(output); 
};

// Predicates
let startsWithT = (word: string): boolean => {
    return word[0] === "t";
};

// TODO #1: Define the `longWords` function below

interface Predicate {
    (item: string): boolean;
}

let filter = (xs: Node<string>, test: Predicate): Node<string> => {
    if (xs === null) {
        return null;
    } else if (test(first(xs))) {
        return cons(first(xs), filter(rest(xs), test));
    } else {
        return filter(rest(xs), test);
    }
};

main();