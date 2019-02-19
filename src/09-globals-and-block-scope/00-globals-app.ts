import { print } from "introcs";

let x: number;

export let main = async () => {
    x = 0;
    f();
    print(x);   
};

let f = (): void => {
    x += 1;
};

main();