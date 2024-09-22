
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
            return "";
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
            return "";
    }
}

/* Using a JS Object for the choises and utilizing key:value pairs makes the code a LOT
more readable and shorter, but here we are: */


function playGame () {
    /* local function */
    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        if (humanChoice === "Rock" && computerChoice === "Paper") {
            /* Human choosing Rock options */
            computerScore += 1;
            console.log(`Player chose: ${humanChoice},
                \nComputer chose: ${computerChoice}.
                \nComputer scores 1.`);
        }
        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore += 1;
            console.log(`Player chose: ${humanChoice},
                \nComputer chose: ${computerChoice}.
                \nPlayer scores 1.`);
        }
            /* Human choosing Paper options */
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore += 1;
            console.log(`Player chose: ${humanChoice},
                \nComputer chose: ${computerChoice}.
                \nPlayer scores 1.`);
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore += 1;
            console.log(`Player chose: ${humanChoice},
                \nComputer chose: ${computerChoice}.
                \nComputer scores 1.`);
        }
            /* Human choosing Scissors options */
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore += 1;
            console.log(`Player chose: ${humanChoice},
                \nComputer chose: ${computerChoice}.
                \nPlayer scores 1.`);
        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore += 1;
            console.log(`Player chose: ${humanChoice},
                \nComputer chose: ${computerChoice}.
                \nComputer scores 1.`);
        }
        else {
            console.log("Draw!");
        }
        
    }
    let humanScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
       playRound();
    }
    console.log(`Player points: ${humanScore}. Computer points: ${computerScore}`);
    
    /* display who won: */

    if (humanScore === computerScore) {console.log("No one wins. How unexpected!");}
    else if (humanScore > computerScore) {console.log("Player wins!");}
    else if (humanScore < computerScore) {console.log("Computer wins!");}
}



/* Every simple game is built with a similar structure */
playGame();

/*
console.log((function() {
    switch (key) {
    else if value:
            
            break;
    
        default:
            break;
    }
}));
*/