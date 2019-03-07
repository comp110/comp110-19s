import {
    Group,
    Line,
    Stroke,
    Color
} from "introcs/graphics";

export class Axes {
    width: number;
    height: number;

    // TODO: Declare a constructor with width and height parameters

    getShapes(): Group {

        let yAxis = new Line(0, -this.height / 2, 0, this.height / 2);

        // TODO: Add an xAxis Line
        
        let g = new Group();
        g.add(yAxis);
        // TODO: Add the xAxis to the group
        return g;
    }
}