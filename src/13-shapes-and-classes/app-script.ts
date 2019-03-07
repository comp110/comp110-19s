import { print, random } from "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Line,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";

/** Constants */
const RADIANS = 2 * Math.PI;
const PERIOD = 5; // seconds
const MS_IN_S = 1000;

/** Global Variables */
let artboard = new SVG("artboard");
artboard.autoScale = false;

/** Begin main program */
export let main = async () => {
    let shapes = new Group();
    let c = new Circle(50, 50, 50);
    shapes.add(c);
    artboard.render(shapes);
};

main();