#! /url/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "usergucessNumber",
        type: "number",
        message: "plz guess a number between 1-6 ",
    },
]);
if (answers.usergucessNumber === randomNumber) {
    console.log("congrates you got right number");
}
else {
    console.log("sorry you guess wrong number");
}
