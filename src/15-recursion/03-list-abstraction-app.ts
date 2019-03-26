import { print } from "introcs";

import { cons, first, rest, toString } from "./list";

export let main = async () => {

    let list = cons("N", cons("C", null));
    print(toString(list));

    // TODO: cons U onto list
    list = cons("U", list);
    print(toString(list));

    // TODO: Print the 2nd and 3rd Values

};

main();