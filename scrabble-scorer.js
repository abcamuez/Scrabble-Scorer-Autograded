// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

//Task 3
 newPointStructure = { 
   a: 1,
   b: 3,
   c: 3,
   d: 2,
   e: 1,
   f: 4,
   g: 2,
   h: 4,
   i: 1,
   j: 8,
   k: 5,
   l: 1,
   m: 3,
   n: 1,
   o: 1,
   p: 3,
   q: 10,
   r: 1,
   s: 1, 
   t: 1, 
   u: 1,
   v: 4,
   w: 4,
   x: 8,
   y: 4,
   z: 10,

}



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
   let score = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
      
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
// let userInput = '';
function initialPrompt() {
   let userInput = input.question("Let's play some scrabble! Enter a word to score: ");
   return userInput;
//   let score = oldScrabbleScorer(userInput);
//   console.log(`The score for '${userInput}' is:\n${score}`);
};



let simpleScorer = function(word){
   word = word.toUpperCase();
   let score = 0;
   for (let i = 0; i < word.length; i++){
     score += 1;
   }
   return score;
 }

 let vowelBonusScorer = function(word){
   word = word.toUpperCase();
   let score = 0;
   let vowels = ['A', 'E', 'I', 'O', 'U'];
   for (let i = 0; i < word.length; i++){
     if (vowels.includes(word[i])){
       score += 3;
     } else {
       score += 1;
     }
   }
   return score;
 };

 let scrabbleScorer = function(word){
   word = word.toLowerCase();
   let score = 0;
   for (let i = 0; i < word.length; i++){
     score += newPointStructure[word[i]];
   }
   return score;
 };

const scoringAlgorithms = [ 
{
name: "Simple Score", 
description: 'Each letter is worth 1 point.',
scorerFunction: simpleScorer

},
{
name: "Bonus Vowel Score",
description: 'Vowels are 3 pts, consonants are 1 pt.',
scorerFunction: vowelBonusScorer
 },
 {
name: "Scrabble Score",
description: 'The traditional scoring algorithm.',
scorerFunction: scrabbleScorer
},
];


  function scorerPrompt() {
   
   let userInput = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
   let scoringAlgo;
   if (userInput == 0) {
      scoringAlgo = scoringAlgorithms[0];
   } else if (userInput == 1) {
      scoringAlgo = scoringAlgorithms[1];
   } else if (userInput == 2) {
      scoringAlgo = scoringAlgorithms[2];
   }
   


   return scoringAlgo;
 };

 function transform(oldPointStructure) {
   let newPointStructure = {};
   for (let key in oldPointStructure) {
     for (let i = 0; i < oldPointStructure[key].length; i++) {
       newPointStructure[oldPointStructure[key][i].toLowerCase()] = Number(key);
     }
   }
   return newPointStructure;
 };
//task 4
// let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scoringAlgo = scorerPrompt();
   let chosenFunction = scoringAlgo.scoringFunction;

   console.log(`Score for '${word}': ${chosenFunction(word)}`);
   
   
}
//task 3
console.log("Scrabble scoring values for");
console.log("letter a: ", newPointStructure.a);
console.log("letter j: ", newPointStructure.j);
console.log("letter z: ", newPointStructure["z"]);

//task 4
console.log("Letters with score '4':", oldPointStructure['4']);
console.log("3rd letter within the key '4' array:", oldPointStructure['4'][2]);

let letters = oldPointStructure['8'];
console.log("Letters with score '8':", letters);
console.log("2nd letter within the key '8' array:", letters[1]);
//task 4



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
