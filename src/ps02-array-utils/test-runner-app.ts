// TODO: Add Honor Code Header

/** Import Test Helpers */
import { testNumber, testArray } from "./test-util";

// TODO: Import functions as you write them
import { count } from "./array-utils";

export let main = async () => {
    
    // Part 1. count
    // Use Cases
    testNumber("count([10, 20], 20)", 1, count([10, 20], 20));
    testNumber("count([20, 20], 20)", 2, count([20, 20], 20));
    // Edge Cases
    testNumber("count([], 20)", 0, count([], 20));
    testNumber("count([10, 30], 20)", 0, count([10, 30], 20));

    // TODO: Add tests for parts as you work through each

};

main();