/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasKey = false;
const hasSword = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains & find a treasure chest.");
  if (hasKey) {
    console.log("You unlock the chest and discover gold and jewels!");
    } else {
      console.log("You need a key to unlock the chest.");
    }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village but bandits approach you.");
  if (hasSword) {
    console.log("You unsheath your sword to defend yourself & The bandits flee. You continue your voyage");
  } else {
    console.log("You are defenseless and the bandits make off with your loot!");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}
const newChoice = readline.question("Do you want to 'rest' in the village or or 'explore' further?");
if (newChoice === "rest") {
  console.log("You rest and regain your strength for the next adventure.");
  } else if (newChoice === "explore") {
    console.log("You discover a cave with valuable artifacts!");
    if (hasTorch) {
      console.log("You use your torch to to explore the cave.");
    } else {
      console.log("It's too dark to see inside the cave so you leave.");
    }
  } else {
    console.log("You return to the village looking for another adventure.");
  }
const finalChoice = readline.question("Do you continue 'exploring' or 'stay' in the village?");
if (finalChoice === "exploring" && hasMap) {
  console.log("You use your map to find a hidden path to the castle.");
  if (hasSword) {
    console.log("You use your sword to defeat the dragon and save the princess!");
  } else {
    console.log("You are defenseless against the dragon and meet your doom.");
  }
} else if (finalChoice === "exploring" && !hasMap) {
  console.log("Without the Map you get lost and wander aimlessly.");
}
if (finalChoice === "stay") {
  console.log("You decide to stay in the village and live happily ever after.");
}
console.log(" The End, Thank you for playing!");

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/