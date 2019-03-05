import { print } from "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // TODO #1: Define a constructor

    translate(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    distanceTo(other: Point): number {
        let xDelta2 = (other.x - this.x) ** 2;
        let yDelta2 = (other.y - this.y) ** 2;
        return Math.sqrt(xDelta2 + yDelta2);
    }

    toString(): string {
        return this.x + ", " + this.y;
    }

}

export let main = async () => {

    // TODO #2 use the constructor
    let a = new Point();
    a.x = 10;
    a.y = 0;

    print(a);

};

main();