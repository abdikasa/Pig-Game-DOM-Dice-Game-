/*
GAME RULES: MY VERSION (JS DONE BY ME, CSS and HTML ARE BOILERPLATE/SAMPLE CODE)

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
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

/**********************************************
*** DOM HANDLERS
**********************************************/

hold = document.querySelector(".btn-hold");
roll = document.querySelector(".btn-roll");
newGame = document.querySelector(".btn-new");
diceImg = document.querySelector(".dice");
p0_score = document.getElementById("score-0");
p1_score = document.getElementById("score-1");
p0_curr = document.getElementById("current-0");
p1_curr = document.getElementById("current-1");

/**********************************************
*** STARTS A NEW GAME/ RESETS SCORES TO ZERO
**********************************************/

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

/**********************************************
*** CHANGES TURNS
**********************************************/

//When user rolls a 1, this function is called.
//It will look at the global activePlayer variable and check to see if it's 0 or 1; player 1 or player 2.
//I used the toggle class to remove/add the active class from one player and add it to another.
//Finally it will return the value of activePlayer; which will be stored in another variable for later use.

let changeTurns = function () {
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

/**********************************************
*** HOLD BUTTON FUNCTION
**********************************************/

//When user clicks the hold button, this function is called.
//It will look at the global activePlayer variable and check to see if it's 0 or 1; player 1 or player 2.
//I used the toggle class to remove/add the 'active' class from one player and add it to another.
//I used a variable  to store the active player's turn, then used the already created array to store the results.
//This task involved using typeof to learn that the score variable returns a string which is converted to a number for calc.
//If player does not hit at least 100 points after pressing hold, the changeTurn function is called. 
//If player does hit at least 100 points, the active class is removed and the special 'winner' class is added.

let holding = function () {
    let score = document.getElementById(`score-${activePlayer}`);
    scores[activePlayer] = Number(score.textContent) + roundScore;
    score.textContent = scores[activePlayer];
    //   console.log(scores[activePlayer]);
    roundScore = 0;
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    if (scores[activePlayer] > 100) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
        document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner")
        hold.style.display = "none";
        roll.style.display = "none";
    } else {
        activePlayer = changeTurns();
    }
}


/**********************************************
*** ROLL DICE FUNCTION
**********************************************/

//Handles the function when player clicks the ROLL DICE button.
//Adds users score to their round score, resets the round score when switching turns.
//Cleverly manipulated the DOM and the defined names for the images by using javascript dynamic properties.
//Outputs round score.
//Switches turns if user rolls a 1, which results a round score of 0 and a skipped turn.

diceRoll = function () {

    dice = Math.floor(Math.random() * 6) + 1;
    diceImg.style.display = "block";

    if (dice === 1) {
        roundScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        activePlayer = changeTurns();
    } else {
        diceImg.src = `dice-${dice}.png`
        roundScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    }
    console.log(`Round Score: ${roundScore}`);
}

/**********************************************
*** LISTENERS/EVENTS
**********************************************/

//Aside from the timeout method, the rest of the listeners will not run into the website is fully ready when all functions have been executed.
//Listeners are only called and executed in the cycle after the functions have been called.

window.setTimeout(start(), 1000);
roll.addEventListener("click", diceRoll);
hold.addEventListener("click", holding);
newGame.addEventListener("click", start)
