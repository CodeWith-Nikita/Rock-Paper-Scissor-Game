
let userChoice;
let compChoice;

let winner = document.getElementById("msg"); 
let compScore = document.getElementById("compSC");
let userScore = document.getElementById("userSC");

const choices = ["Rock", "Paper", "Scissor"];

function rock(){
    userChoice = choices[0];
    let randomIdx = Math.floor(Math.random()*choices.length);
    compChoice = choices[randomIdx];
    result();
}

function paper(){
    userChoice = choices[1];
    let randomIdx = Math.floor(Math.random()*choices.length);
    compChoice = choices[randomIdx];
    result();
}

function scissor(){
    userChoice = choices[2];
    let randomIdx = Math.floor(Math.random()*choices.length);
    compChoice = choices[randomIdx];
    result();
}

    // ------------------score----------------
    let comSC = 0;
    let userSC = 0;
    function displayScores(){
        compScore.textContent = `${comSC}`;
        userScore.textContent = `${userSC}`;
    }

    //RESULT

function result(){

    // WHEN USER CHOICE : ROCK
    if((userChoice == choices[0]) && (compChoice == choices[0])){
        winner.textContent = `Game Tie!`;
    }
    else if((userChoice == choices[0]) && (compChoice == choices[1])){
        winner.textContent = `Computer WIN!`;
        comSC++;
        displayScores();
    }
    else if((userChoice == choices[0]) && (compChoice == choices[2])){
        winner.textContent = `YOU WIN!`;
        userSC++;
        displayScores();
    }

    // WHEN USER CHOICE : PAPER
    if((userChoice == choices[1]) && (compChoice == choices[0])){
        winner.textContent = `YOU WIN!`;
        userSC++;
        displayScores();
    }
    else if((userChoice == choices[1]) && (compChoice == choices[1])){
        winner.textContent = `Game Tie!`;
    }
    else if((userChoice == choices[1]) && (compChoice == choices[2])){
        winner.textContent = `Computer WIN!`;
        comSC++;
        displayScores();
    }

    // WHEN USER CHOICE : SCISSOR
    if((userChoice == choices[2]) && (compChoice == choices[0])){
        winner.textContent = `Computer WIN!`;
        comSC++;
        displayScores();
    }
    else if((userChoice == choices[2]) && (compChoice == choices[1])){
        winner.textContent = `YOU WIN!`;
        userSC++;
        displayScores();
    }
    else if((userChoice == choices[2]) && (compChoice == choices[2])){
        winner.textContent = `Game Tie!`;
    }
}

//  NEW GAME
function newGame(){
    comSC = 0;
    userSC = 0;
    displayScores();
    winner.textContent = `Select your choice`;
}