/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Define variabeles
let activePlayer, scores, roundScore, stillPlaying, dice;

activePlayer = 0;
scores = [0, 0];
roundScore = 0;
stillPlaying = true;

//DOM Handlers
let hold = document.querySelector(".btn-hold");
let roll = document.querySelector(".btn-roll");
let newGame = document.querySelector(".btn-new");
let p1 = document.querySelector("#score-0");
let p2 = document.querySelector("#score-1");
let p1_curr = document.querySelector("#current-0");
let p2_curr = document.querySelector("#current-1");




// IFEE Reset Game to Zero
(function () {
    p1.textContent = 0;
    p2.textContent = 0;
    p1_curr.textContent = 0;
    p2_curr.textContent = 0;
})()


//Commented for later use
//dice = Math.floor(Math.random() * 6) + 1;

//Functions here































