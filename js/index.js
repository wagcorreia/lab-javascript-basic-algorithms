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
console.log(`${hacker1.toUpperCase()}   ${hacker2.toUpperCase()}`)

let hacker1 = "Taís";
let hacker2 = "Wagner";

let array = hacker1.split("");

let newHacker1Name = [];

for(i=0;i<array.length;i++){
    newHacker1Name.unshift(array[i]);
}
console.log(`${newHacker1Name[0]}${newHacker1Name[1]}${newHacker1Name[2]}${newHacker1Name[3]}`)

