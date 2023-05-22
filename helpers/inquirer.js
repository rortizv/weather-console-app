const inquirer = require("inquirer");
require("colors");

const menuQuestions = [
    {
        type: "list",
        name: "option",
        message: "What do you want to do?",
        choices: [
            {
                value: "1",
                name: `${"1.".green} Search by city`,
            },
            {
                value: "2",
                name: `${"2.".green} List historical searches`,
            },
            {
                value: "0",
                name: `${"0.".green} Exit`,
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("========================".green);
    console.log("    Select an option".rainbow);
    console.log("========================\n".green);

    const { option } = await inquirer.prompt(menuQuestions);
    return option;
};

const pause = async () => {
    const question = [
        {
            type: "input",
            name: "enter",
            message: `Press ${"ENTER".blue} to continue`,
        }
    ];
    console.log("\n");
    await inquirer.prompt(question);
};

const readInput = async (message) => {
    const question = [
        {
            type: "input",
            name: "city",
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Please enter a value";
                }
                return true;
            }
        }
    ];
    const { city } = await inquirer.prompt(question);
    return city;
}

const confirm = async (message) => {
    const question = [
        {
            type: "confirm",
            name: "ok",
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    confirm
};