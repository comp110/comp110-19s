import { print } from "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    translate(dx: number, dy: number): void {
        // TODO #1
    }

    toString(): string {
        return this.x + ", " + this.y;
    }

}

export let main = async () => {
    let a = new Point();
    print(a.toString());

    // TODO #2: Call translate

    print(a.toString());

    // TODO #3: Call translate again

    print(a.toString());
};

main();