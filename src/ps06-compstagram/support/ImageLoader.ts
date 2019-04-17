import { Image } from "../Image";
import { Color } from "../Color";

declare function loadImage(
    file: File,
    callback: (img: HTMLImageElement) => void,
    options: object
): void;

export interface ImageEventHandler {
    (image: Image): void;
}

export class ImageLoader {
    input: HTMLInputElement;
    reader: FileReader;
    img: HTMLImageElement;
    canvas: HTMLCanvasElement;
    onload: ImageEventHandler;

    constructor(input: HTMLInputElement, width: number, height: number) {
        this.input = input;
        this.reader = new FileReader();
        this.img = document.createElement("img");
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;

        this.input.onchange = this.readFile.bind(this);
        this.reader.onload = this.createImage.bind(this);
        this.img.onload = this.loadImage.bind(this);
    }

    readFile(): void {
        let files: FileList | null = this.input.files;
        if (files === null) {
            return;
        }
        let file: File = files[0];
        loadImage(
            file,
            (img: HTMLImageElement): void => {
                this.img = img;
                this.loadImage();
            },
            {
                maxWidth: 600,
                orientation: true
            }
        );
    }

    createImage(): void {
        this.img.src = this.reader.result as string;
    }

    loadImage(): void {
        let srcX: number = 0;
        let srcY: number = 0;
        let constraint: number;
        if (this.img.height > this.img.width) {
            constraint = this.img.width;
            srcY = (this.img.height - this.img.width) / 2;
        } else {
            constraint = this.img.height;
            srcX = (this.img.width - this.img.height) / 2;
        }
        let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.drawImage(this.img, srcX, srcY, constraint, constraint, 0, 0, this.canvas.width, this.canvas.height);
        let raw: ImageData = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        let image: Image = new Image(this.canvas.width, this.canvas.height);
        for (let i: number = 0; i < raw.data.length; i += 4) {
            let row: number = Math.floor(i / 4 / raw.width);
            let col: number = i / 4 % raw.width;
            let red: number = raw.data[i] / 255;
            let green: number = raw.data[i + 1] / 255;
            let blue: number = raw.data[i + 2] / 255;
            image.pixels[row][col] = new Color(red, green, blue);
        }

        if (this.onload !== undefined) {
            this.onload(image);
        }
    }
}