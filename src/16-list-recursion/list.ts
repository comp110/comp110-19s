/* Data Structure: Linked List */

export class Node {
    data: string = "";
    next: Node = null;
}

/* Constructor */

export let cons = (data: string, next: Node): Node => {
    let n = new Node();
    n.data = data;
    n.next = next;
    return n;
};

/* Selectors */

export let first = (n: Node): string => {
    return n.data;
};

export let rest = (n: Node): Node => {
    return n.next;
};

/* Helper Functions */

export let toString = (n: Node): string => {
    if (n === null) {
        return "NULL";
    } else {
        return first(n) + " → " + toString(rest(n));
    }
};