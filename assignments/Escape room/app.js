// Tell the user their options:

// 1. Find the key, or
// 2. Open the door
//     1. Put hand in hole

// They can't open the door unless they find the key first.They die if they put their hand in the hole.
const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello " + name);

const ready = readline.question("Are you ready to play? ");
const ops = ["find the key", "open the door", "put your hand in the hole"];
const ops2 = ["open the door", "put your hand in the hole"];

const options = readline.keyInSelect(ops, "Here are your options. What would you like to do?");

if (options === 0) {
    const ops1 = parseInt(readline.question("What's 2 + 2? "));
    if (ops1 === 4) {
        console.log("Correct! Here is your key! 🗝️ You can now open the door!");
        const secondOps = readline.keyInSelect(ops2, "Pick one of these options");
        if (secondOps === 0) {
            console.log("Congratulations! You've escaped!");
        } else {
            console.log("The door is locked! You have to find the key!");
        }
    } else {
        console.log("Incorrect! You have died. Start over!");
    }
} else if (options === 1) {
    console.log("The door is locked! you need to find the key!");
} else if (options === 2) {
    console.log("OH NO! You died from putting your hand in the hole! Start over!");
} else {
    console.log("Invalid option.");
}

