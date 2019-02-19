import { print, promptNumber } from "introcs";

export let main = async () => {
    let cost = 0;
    {
        // This is a block
        let costPerBook = 100;
        let numBooks = 3;
        cost = costPerBook * numBooks;
    }
    print(cost);
};

main();