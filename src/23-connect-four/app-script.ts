/**
 * Connect4
 * 
 * The goal of this 2 player game is to get a streak of four of your pieces 
 * connected either vertically, horizontally, or diagonally.
 */
import {
    SVG,
    Group,
    Circle,
    Rectangle,
    Text,
    Color
} from "introcs/graphics";

/* Constants for the board */
const ROWS: number = 6;
const COLS: number = 7;
const RADIUS: number = 16;
const GUTTER: number = 8;

/* Constants for game logic */
const EMPTY: number = -1;
const PLAYER_0: number = 0;
const PLAYER_1: number = 1;

/**
 * The board global variable contains the state of the game. Elements in the 2D
 * array which are -1 represent an empty position. Elements which are 0 or 1
 * belong to player 0 or player 1, respectively.
 */
let board: number[][];

/**
 * The turn global variable keeps track of how many turns have been taken total.
 */
let turn: number = 0;

/**
 * Starting point of our program.
 */
let main = async () => {
    initBoard();
    renderBoard();
};

/**
 * When the player clicks on a position on the board, this function is called.
 * This function will be called no matter whether the position clicked is empty
 * or taken by player 0 or player 1.
 */
let play = (row: number, col: number): void => {
    let player: number = turn % 2;

    // TODO: Find an empty row in the selected column

    // Assign a position to the current player
    board[row][col] = player;

    // TODO: Check to see if player won

    // TODO: Check for draw game
 
    renderBoard();
    turn++;
};

/**
 * Given a column, find the first "EMPTY" row starting from the last row of the
 * column and working back up. If no empty row for the col is found, return -1.
 */
let findEmptyRow = (col: number): number => {

    // TODO
    return 0;

};

/**
 * Check to see if a player has won the game. This will traverse every position
 * in the 2D array and check to see if that position is the start of a winning
 * streak of 4 connected positions controlled by the same player.
 */
let isWin = (player: number): boolean => {
    // TODO: Implement 
    return false;
};

/**
 * Relative to any single position on the board, a connect4 win can happen in any direction:
 * 
 * 1. Up (-1), Left (-1)
 * 2. Up (-1)
 * 3. Up (-1), Right (+1)
 * 4. Left (-1)
 * 5. Right (+1)
 * 6. Down (+1), Left (-1)
 * 7. Down (+1) 
 * 8. Down (+1), Right (+1)
 * 
 * This function will loop through all 8 directions and check for connect4.
 */
let isConnect4 = (player: number, row: number, col: number): boolean => {

    // TODO: Implement logic to check for a win in all directions starting at row, col
    return board[row][col] === player && row === ROWS - 1 && col === 1 && player === 0;

};

/**
 * Check whether there is a streak of 4 connected player pieces recursively
 * at row, col when checking in the direction of rowDir, colDir.
 * 
 * rowDir and colDir can each be -1, 0, or +1.
 */
let recurConnect4 = (
            player: number,
            row: number,
            col: number,
            rowDir: number,
            colDir: number,
            streak: number
        ): boolean => {

    // TODO: Implement logic to check for a win in all directions starting at row, col
    return board[row][col] === player && row === ROWS - 1 && col === 1 && player === 1;

};

/**
 * Check to see if the game is a tie. This occurs when there are now empty rows
 * in any columns.
 */
let isDraw = (): boolean => {

    // TODO
    return false;

};

/**
 * Setup the board's 2D array to contain all EMPTY spaces.
 */
let initBoard = (): void => {
    board = [];
    for (let row: number = 0; row < ROWS; row++) {
        board[row] = [];
        for (let col: number = 0; col < COLS; col++) {
            board[row][col] = EMPTY;
        }
    }
};

/**
 * Turn the 2D number array into a grid of circles.
 */
let renderBoard = (): void => {
    let artboard: SVG = new SVG("artboard");
    artboard.autoScale = true;

    let g: Group = new Group();

    for (let col: number = 0; col < COLS; col++) {
        let t: Text = new Text("" + col);
        t.x = (RADIUS * 2 + GUTTER) * (col + 1) - 6;
        t.y = 16;
        g.add(t);
    }

    for (let row: number = 0; row < ROWS; row++) {
        let rowRect: Rectangle = new Rectangle((RADIUS * 2 + GUTTER) * COLS + GUTTER, RADIUS * 2 + GUTTER);
        rowRect.x = RADIUS * 2 - GUTTER * 2;
        rowRect.y = (RADIUS * 2 + GUTTER) * (row + 1) - RADIUS - GUTTER / 2;
        rowRect.fill = new Color(0.98, 0.929, 0);
        g.add(rowRect);
        
        let rowT: Text = new Text("" + row);
        rowT.x = 0;
        rowT.y = (RADIUS * 2 + GUTTER) * (row + 1) + 8;
        g.add(rowT);

        for (let col: number = 0; col < COLS; col++) {
            let position: Circle = new Circle(RADIUS, (RADIUS * 2 + GUTTER) * (col + 1), (RADIUS * 2 + GUTTER) * (row + 1));
            if (board[row][col] === PLAYER_0) {
                position.fill = new Color(1.0, 0, 0);
            } else if (board[row][col] === PLAYER_1) {
                position.fill = new Color(0, 0, 0);
            }
            position.onclick = (e: MouseEvent): void => {
                play(row, col);
            };
            g.add(position);
        }
    }
    artboard.render(g);
};

/**
 * Restart the game after 1 second.
 */
let reset = (): void => {
    setTimeout(main, 1000);
};

main();