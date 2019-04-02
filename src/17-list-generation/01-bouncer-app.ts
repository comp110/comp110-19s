import { first, rest, cons, listify, Node } from "introcs/list";

import { print } from "introcs";

export let main = () => {
    let ages = listify(18, 21, 16, 23, 22);
    print(ages);

    let agesInBar = bouncer(ages);
    print(agesInBar);
};

let bouncer = (list: Node<number>): Node<number> => {
    if (list === null) {
        return null;
    } else {
        let age = first(list);
        // TODO: Remove the return statement below
        return null;
    }
};

main();