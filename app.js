/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Declared variables
let scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0; //let 0 be the first player and 1 be the second player.
var btnroll_ = document.querySelector(".btn-roll");
var secondC = document.querySelector("#current-1");
var second = document.querySelector("#score-1");
var first = document.querySelector("#score-0");

var firstC = document.querySelector("#current-0");
dice = Math.floor(Math.random() * 6) + 1;

//selecting html classes/ids

function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
    firstC.innerHTML = dice;
}

//set all scores to 0 when starting the game.
//fixed issue that the event btnroll_ could be clicked as they page loads.
//forced click event listener to wait for all functions to  load first before executing on the stack.

function newGame() {
    first.innerHTML = 0;
    firstC.innerHTML = 0;
    second.innerHTML = 0;
    secondC.innerHTML = 0;
}
window.setTimeout(newGame(),1000);

btnroll_.addEventListener("click", rollDice)



























