/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Define variabeles
let activePlayer, scores, roundScore, stillPlaying, dice, diceRoll;
let hold, roll, newGame, diceImg;
activePlayer = 0;
scores = [0, 0];
roundScore = 0;
stillPlaying = true;


//DOM Handlers
hold = document.querySelector(".btn-hold");
roll = document.querySelector(".btn-roll");
newGame = document.querySelector(".btn-new");

diceImg = document.querySelector(".dice");


//Get rid of IFEE, maybe a timeout for 1 second to prevent click events from starting. DONE
//Or I could just change the HTML scores to 0. DONE
function start() {
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    diceImg.style.display = "none";
}

//Change turns via ternary operator.
//Used classlist to add and remove the classes fromthe slected panels.
let change = function changePlayers() {
    if (activePlayer === 0) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove(`active`);
        activePlayer = 1;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add(`active`);
    } else {
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove(`active`);
        activePlayer = 0;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add(`active`);
    }
    return activePlayer;
}

//Function expression for dice roll.
diceRoll = function () {
    //1. Generate A Random Number

    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display result
    diceImg.style.display = "block";

    //3. Upload round score if the rollled number is not a 1, display image, add score.
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

window.setTimeout(start(), 1000);




//Commented for later use
//dice = Math.floor(Math.random() * 6) + 1;

//Functions here































