// Iteration 1: Names and Input
let hacker1 = "Taís";
console.log(`The driver´s name is ${hacker1}`)
let hacker2 = "Wagner";
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters  characters`)
}
else if (hacker1.length == hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals

let hacker1 = "Taís";
let hacker2 = "Wagner";

let array = hacker1.split("");

let newHacker1 = [];

for (i = 0; i < array.length; i++) {
  newHacker1.push(array[i].toUpperCase());
}
console.log(
  `${newHacker1[0]} ${newHacker1[1]} ${newHacker1[2]} ${newHacker1[3]}`
);


//3.2 Print all the characters of the navigator's name, in reverse order.

let hacker1 = "Taís";
let hacker2 = "Wagner";

let array = hacker1.split("");

let newHacker1Name = [];

for (i = 0; i < array.length; i++) {
  newHacker1Name.unshift(array[i]);
}
console.log(
  `${newHacker1Name[0]}${newHacker1Name[1]}${newHacker1Name[2]}${newHacker1Name[3]}`
);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

let hacker1 = "Taís";
let hacker2 = "Wagner";

let hackerLetter = [hacker1, hacker2];

if (hackerLetter[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (hackerLetter[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hackerLetter[0] === hackerLetter[1]) {
  console.log("What?! You both have the same name?");
}




