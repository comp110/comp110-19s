/** Import Test Helpers */
import { testNumber } from "./test-util";

import { indexOf } from "./indexOf";

export let main = async () => {
    
    // indexOf Use Cases
    testNumber("indexOf([1, 2, 3], 1)", 0, indexOf([1, 2, 3], 1));
    testNumber("indexOf([1, 2, 3], 2)", 1, indexOf([1, 2, 3], 2));
    testNumber("indexOf([1, 2, 3], 3)", 2, indexOf([1, 2, 3], 3));
    // indexOf Edge Cases
    testNumber("indexOf([1, 2, 3], 4)", -1, indexOf([1, 2, 3], 4));
    testNumber("indexOf([1, 2, 2], 2)", 1, indexOf([1, 2, 2], 2));

};

main();