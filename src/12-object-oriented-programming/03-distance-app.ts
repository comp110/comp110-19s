import { print } from "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    translate(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    // TODO: Define the distanceTo method

    toString(): string {
        return this.x + ", " + this.y;
    }

}

export let main = async () => {

    let a = new Point();

    let b = new Point();
    b.translate(0, 10);

    // TODO: Call the distanceTo function
    // and print the result

};

main();