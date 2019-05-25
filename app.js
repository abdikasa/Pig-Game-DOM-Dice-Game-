/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/**********************************************
*** DECLARED VARIABLES
**********************************************/

let activePlayer, scores, roundScore, stillPlaying, dice, diceRoll;
let hold, roll, newGame, diceImg, p0_score, p0_curr, p1_curr, p1_score;

/**********************************************
*** DEFINED VARIABLES
**********************************************/

activePlayer = 0;
scores = [0, 0];
roundScore = 0;
stillPlaying = true;

//DOM Handlers
hold = document.querySelector(".btn-hold");
roll = document.querySelector(".btn-roll");
newGame = document.querySelector(".btn-new");
diceImg = document.querySelector(".dice");
p0_score = document.getElementById("score-0");
p1_score = document.getElementById("score-1");
p0_curr = document.getElementById("current-0");
p1_curr = document.getElementById("current-1");


function start() {
    scoreReset();
    handleButtonAction();
    removeAdditionalClasses();
}

function removeAdditionalClasses() {
    document.querySelector(`.player-0-panel`).classList.add(`active`);
    document.querySelector(`.player-0-panel`).classList.remove(`winner`);
    document.querySelector(`.player-1-panel`).classList.remove(`winner`);
    document.querySelector(`.player-1-panel`).classList.remove(`active`);
}

function scoreReset() {
    p0_score.textContent = 0;
    p1_score.textContent = 0;
    p0_curr.textContent = 0;
    p1_curr.textContent = 0;
}

function handleButtonAction() {
    diceImg.style.display = "none";
    hold.style.display = "block";
    roll.style.display = "block";
}


let change = function () {
    if (activePlayer === 0) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle(`active`);
        activePlayer = 1;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add(`active`);
    } else {
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle(`active`);
        activePlayer = 0;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add(`active`);
    }
    return activePlayer;
}

//Handles the unction when playerclicks the hold button.
//Adds users score to their main score, resets the round score when switching turns.
//Win condition is one here as well; if player reaches 100 points, game is over.
//Winner will have a special class added to it and the buttons hold and roll will be gone.

let holding = function () {
    let score = document.getElementById(`score-${activePlayer}`);
    scores[activePlayer] = Number(score.textContent) + roundScore;
    score.textContent = scores[activePlayer];
    console.log(scores[activePlayer])
    //console.log(typeof num, num)
    roundScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    if (scores[activePlayer] > 20) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
        document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner")
        hold.style.display = "none";
        roll.style.display = "none";
    } else {
        activePlayer = change();
    }
}

//Function expression for dice roll.

diceRoll = function () {

    dice = Math.floor(Math.random() * 6) + 1;
    diceImg.style.display = "block";

    if (dice === 1) {
        roundScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        activePlayer = change();
    } else {
        diceImg.src = `dice-${dice}.png`
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    }
    console.log(`Round Score: ${roundScore}`);
}

roll.addEventListener("click", diceRoll);
hold.addEventListener("click", holding);
newGame.addEventListener("click", start)
window.setTimeout(start(), 1000);