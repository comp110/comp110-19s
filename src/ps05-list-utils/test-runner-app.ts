// TODO: Add the honor code pledge with your name and onyen here.

/** Import Test Helpers */
import { print } from "introcs";
import { cons } from "introcs/list";
import { test, testList } from "./test-util";

// TODO: Import functions as you write them
import { 
    last, 
    valueAt, 
    max,
    scale
} from "./list-utils";

export let main = async () => {
    
    print("List Utils Tests");

    // Some simple lists data to test with.
    // You should add your own lists, too!
    let numbers1 = cons(1, null);
    let numbers12 = cons(1, cons(2, null));
    let numbers121 = cons(1, cons(2, cons(1, null)));
    let numbers363 = cons(3, cons(6, cons(3, null)));

    let stringsA = cons("A", null);
    let stringsAB = cons("A", cons("B", null));
    let stringsABC = cons("A", cons("B", cons("C", null)));

    // This constant is an alias for the smallest number possible.
    const MIN = Number.MIN_SAFE_INTEGER;

    // ================================    
    // Part 1. last
    print("Part 1. last");
    // Use Cases
    test("1.1 last(numbers1)", 1, last(numbers1));
    test("1.2 last(numbers12)", 2, last(numbers12));
    test("1.3 last(stringsA)", "A", last(stringsA));
    test("1.4 last(stringsAB)", "B", last(stringsAB));
    // Edge Cases
    test("1.5 last(null)", null, last(null));

    // ================================    
    // Part 2. valueAt
    print("Part 2. valueAt");
    // Use Cases
    test("2.1 valueAt(numbers121, 0)", 1, valueAt(numbers121, 0));
    test("2.2 valueAt(numbers121, 1)", 2, valueAt(numbers121, 1));
    test("2.3 valueAt(numbers121, 2)", 1, valueAt(numbers121, 2));
    test("2.4 valueAt(stringsABC, 0)", "A", valueAt(stringsABC, 0));
    test("2.5 valueAt(stringsABC, 1)", "B", valueAt(stringsABC, 1));
    test("2.6 valueAt(stringsABC, 2)", "C", valueAt(stringsABC, 2));
    // Edge Cases
    test("2.7 valueAt(numbers121, 3)", null, valueAt(numbers121, 3));
    test("2.8 valueAt(numbers121, -1)", null, valueAt(numbers121, -1));

    // ================================
    // Part 3. max
    // Use Cases
    print("Part 3. max");
    test("3.1 max(numbers1, MIN)", 1, max(numbers1, MIN));
    test("3.2 max(numbers121, MIN)", 2, max(numbers121, MIN));
    // Edge Cases
    test("3.2 max(null, MIN)", MIN, max(null, MIN));

    // TODO - You will need to write your own tests from here.

    // ================================
    // Part 4. all
    print("Part 4. all");
    // Use Cases - note, you will need to import this (and subsequent) function!
    // Edge Cases

    // ================================
    // Part 5. equals
    print("Part 5. equals");
    // Use Cases
    // Edge Cases

    /** 
     * Ensure your equals function is correctly implemented before 
     * continuing further!
     */

    // ================================
    // Part 6. scale
    print("Part 6. scale");
    // Use Cases
    // One example is shown below:
    testList("scale(numbers121, 3)", numbers363, scale(numbers121, 3));
    // Edge Cases
    
    // ================================
    // Part 7. arrayToList
    print("Part 7. arrayToList");
    // Use Cases
    // Edge Cases

    // ================================
    // Part 8. concat
    print("Part 8. concat");
    // Use Cases
    // Edge Cases

    // ================================
    // Part 9. splice
    print("Part 9. splice");
    // Use Cases
    // Edge Cases

    // ================================
    // Part 10. sub
    print("Part 10. sub");
    // Use Cases
    // Edge Cases

};

main();