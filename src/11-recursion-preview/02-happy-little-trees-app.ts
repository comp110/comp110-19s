import { forward, left, right, setSpeed, moveTo, setOnClick } from "introcs/turtle";

/**
 * Constants we'll use and can modify to tweak aesthetic.
 */
const LEFT_SCALE = 0.75;
const RIGHT_SCALE = 0.7;
const LEFT_DIR = Math.PI * 0.2;
const RIGHT_DIR = -Math.PI * 0.15;

export let main = async () => {
    setSpeed(10);
    drawTree(275, 400);
};

/**
 * Draw a tree at position x, y.
 */
let drawTree = (x: number, y: number): void => {
    moveTo(x, y);
    drawBranch(Math.PI / 2, 100);
};

/**
 * Draw a happy, little branch and then draw offshoots recursively.
 */
let drawBranch = (dir: number, length: number) => {
    // TODO
};

/**
 * Trace a line out at an angle for a branch.
 */
let lineOut = (angle: number, length: number): void => {
    left(angle);
    forward(length);
};

/**
 * Trace a line _BACK_ from a lineOut to reset the turtle
 * to its previous position and orientation.
 */
let lineBack = (angle: number, length: number): void => {
    left(Math.PI); // Make 180 degree turn
    forward(length); // Move back by length to start point
    right(Math.PI); // Reset 180 degree turn
    right(angle); // Move angle back to original orientation
};

main();