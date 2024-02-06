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
  let score = oldScrabbleScorer(userInput);
//   console.log(`The score for '${userInput}' is:\n${score}`);
};



function simpleScorer(word){
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

let scrabbleScorer;

const scoringAlgorithms = [ 
{
name: 'Simple Score', 
description: 'Each letter is worth 1 point.',
scoringFunction: simpleScorer,

},
{
name: 'Bonus Vowel Score',
description: 'Vowels are 3 pts, consonants are 1 pt.',
scoringFunction: vowelBonusScorer,
 },
 {
name: 'Scrabble Score',
description: 'The traditional scoring algorithm.',
scoringFunction: oldScrabbleScorer
},];


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
   let score = scoringAlgo.scoringFunction(userInput);

     console.log(`The score for '${userInput}' using ${scoringAlgo.name} is: ${score}`);


   return scoringAlgo;
 };

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
   
}

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
