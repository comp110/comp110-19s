import { print } from "introcs";

class Node {
    data: string = "";
    next: Node = null;
}

export let main = async () => {

    let head = new Node();
    head.data = "C";
    let temp = head;

    head = new Node();
    head.data = "N";
    head.next = temp;
    temp = head;

    // TODO #1: Construct a new Node
    // 1.1 Set its data to "U"
    // 1.2 Set its next property to temp

    print(head.data);
    print(head.next.data);
    
    // TODO #2: Print out the data
    // property of the third Node 
    // which has "C" as its data.

};

main();