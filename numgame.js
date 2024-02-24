"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const systemgenratedno = Math.floor(Math.random() * 50);
console.log(`Welcome to "Number Guess Game Devlope by "Munaza asghar"`);
const answer = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "guessNum",
        message: "Guess the correct Numberb/w 20 to 50"
    }
]);
const { guessNum } = answer;
console.log(`Your Guess,${guessNum},systemnumber${systemgenratedno}`);
if (guessNum == systemgenratedno) {
    console.log("Wow!You Guess the corrcet Number/ You Win");
}
else if (guessNum != systemgenratedno) {
    console.log("Oop!You Guess the incorrcet Number/ You Lose");
}
