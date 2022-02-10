/*-------------------------------- Notes --------------------------------*/
//Add dropdown from bootstrap for player selection

//Add modal from bootsrap to confirm player category selection


/*-------------------------------- Constants --------------------------------*/
const diceRollOne = function () {
  return (Math.floor(Math.random() * 6 + 1))
}

// const diceRollTwo = function () {
//   return (Math.floor(Math.random() * 6 + 1))
// }

// const diceRollThree = function () {
//   return (Math.floor(Math.random() * 6 + 1))
// }

// const diceRollFour = function () {
//   return (Math.floor(Math.random() * 6 + 1))
// }

// const diceRollFive = function () {
//   return (Math.floor(Math.random() * 6 + 1))
// }

console.log(diceRollOne())
// console.log(diceRollTwo())
// console.log(diceRollThree())
// console.log(diceRollFive())
// console.log(diceRollFour())







/*-------------------------------- Constants --------------------------------*/
let allDice
let playerTurn
let allPlayers
let scoreboard
let rollCount



/*------------------------ Cached Element References ------------------------*/
const playerScoreboard = document.getElementById("playerscoreboard")
const playerInput = document.querySelector("#playerInput")
const form = document.querySelector('form')
const gameMsg = document.getElementById('game-message')



/*----------------------------- Event Listeners -----------------------------*/
// form.addEventListener("submit", getPlayer)







/*-------------------------------- Functions --------------------------------*/
init()

function init () {
  allPlayers = []
  gameMsg.innerHTML = "Enter the name of each player one by one!"
  render()
}

function getPlayer(){
  playerName = playerInput.value;
  playerInput.value = ""
  if (allPlayers.length === 6) {
    gameMsg.textContent = "Sorry, only 6 players!"
    } else {
    gameMsg.textContent = "Enter the name of each player one by one!"
    allPlayers.push(playerName) 
    console.log(allPlayers)
    render()
  }
  return false
}


function render() {
  allPlayers.forEach((str, idx) => {
    appendScoreboard(str, idx)
    console.log(str, idx)
  })
}

function appendScoreboard(str, idx) {
  let playerBoard = document.createElement("div")
  playerBoard.classList.add("playerscore")
  playerBoard.innerHTML =
  `<div id="name" class="player player1">${str}</div>
  <div id="ones" class="player player${idx + 1}"></div>
  <div id="twos" class="player player${idx + 1}"></div>
  <div id="threes" class="player player${idx + 1}"></div>
  <div id="fours" class="player player${idx + 1}"></div>
  <div id="fives" class="player player${idx + 1}"></div>
  <div id="sixes" class="player player${idx + 1}"></div>
  <div id="top-half-bonus1" class="player player${idx + 1}"></div>
  <div id="three-kind1" class="player player${idx + 1}"></div>
  <div id="four-kind1" class="player player${idx + 1}"></div>
  <div id="sm-straight1" class="player player${idx + 1}"></div>
  <div id="lg-straight1" class="player player${idx + 1}"></div>
  <div id="yahtzee1" class="player player${idx + 1}"></div>
  <div id="chance1" class="player player${idx + 1}"></div>
  <div id="yahtzee-bonus1" class="player player${idx + 1}"></div>
  <div id="total-score1" class="player player${idx + 1}"></div>`
  playerScoreboard .appendChild(playerBoard)
}
