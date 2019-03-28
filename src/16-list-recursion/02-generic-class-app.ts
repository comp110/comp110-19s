import { print } from "introcs";

export let main = async () => {

    // TODO: Rewrite these using concrete types
    let a: NodeString = new NodeString();
    a.data = "hello, world";

    let b = new NodeNumber();
    b.data = 110;

    print(a.data);
    print(b.data);

};

// TODO: Define a new generic Node class

class NodeString {
    data: string = "";
    next: NodeString = null;
}

class NodeNumber {
    data: number = 0;
    next: NodeNumber = null;
}

main();