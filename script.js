
function getComputerChoice() {
    /* First store a function expression within this const */
    const random = function () {
        return Math.floor((Math.random() * 3) + 1);
    };
    /* Here we're storing the computer number by invoking the random function */
    let number = random(); 
    switch (number) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "None(?)";
    }
}

function getHumanChoice() {
    /* IIFE works too, and makes the code a lot neater, except for the parentheses */
    switch ( (function() {
        return prompt(`Type: 
            1 for Rock
            2 for Paper
            3 for Scissors`);
        })() ) {
        case '1':
            return "Rock";
        case '2':
            return "Paper";
        case '3':
            return "Scissors";
        default:
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
}

let humanScore = 0, computerScore = 0;
const humanCh = getHumanChoice();
const computerCh = getComputerChoice();

for (let index = 0; index < 5; index++) {
    
}

console.log(getComputerChoice());

/*
console.log((function() {
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}));
*/