import { print } from "introcs";

export let main = async () => {
    let a = consString("hello, world", null);
    let b = consNumber(110, null);

    print(a.data);
    print(b.data);
};

export class Node<T> {
    data: T;
    next: Node<T> = null;
}

// TODO: Define cons using generic types.
export let cons = (data: string, next: Node<string>): Node<string> => {
    let n = new Node<string>();
    n.data = data;
    n.next = next;
    return n;
};

export let consString = (data: string, next: Node<string>): Node<string> => {
    let n = new Node<string>();
    n.data = data;
    n.next = next;
    return n;
};

export let consNumber = (data: number, next: Node<number>): Node<number> => {
    let n = new Node<number>();
    n.data = data;
    n.next = next;
    return n;
};

main();