import { readInput } from "./helpers/inquirer.js";

const main = async () => {

    const text = await readInput("Hello: ");
    console.log(text);
    
};

main();