import { print } from "introcs";
import { Node, cons, first, rest, toString } from "./list";

export let main = async () => {
    let names = cons("Kevin Guskiewicz", cons("Kevin Bacon", cons("Roy", null)));
    print("Names: " + toString(names));

    print("Kevin Bacon is in the names list...");
    print(includes(names, "Kevin Bacon"));
};

// TODO: Implement the includes Function
let includes = (list: Node, search: string): boolean => {
    return false;
};

main();