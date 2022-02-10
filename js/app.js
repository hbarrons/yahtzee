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
const playerScoreboard = document.querySelector("#playerscoreboard")
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
    allPlayers.push(playerName) 
    console.log(allPlayers)
  }
  return false
}


function render() {
  allPlayers.forEach((name, idx) => {
    console.log(name, idx)
    appendScoreboard(name, idx)
  })
}

function appendScoreboard(playerName, idx) {
  let players = document.createElement("div")
  players.classList.add("card", `${playerName.artist.toLowerCase()}`)
  players.innerHTML =
  `<div id="name1" class="player player1">${playerName}</div>
  <div id="ones1" class="player player${idx}"></div>
  <div id="twos1" class="player player${idx}"></div>
  <div id="threes1" class="player player${idx}"></div>
  <div id="fours1" class="player player${idx}"></div>
  <div id="fives1" class="player player${idx}"></div>
  <div id="sixes1" class="player player${idx}"></div>
  <div id="top-half-bonus1" class="player player${idx}"></div>
  <div id="three-kind1" class="player player${idx}"></div>
  <div id="four-kind1" class="player player${idx}"></div>
  <div id="sm-straight1" class="player player${idx}"></div>
  <div id="lg-straight1" class="player player${idx}"></div>
  <div id="yahtzee1" class="player player${idx}"></div>
  <div id="chance1" class="player player${idx}"></div>
  <div id="yahtzee-bonus1" class="player player${idx}"></div>
  <div id="total-score1" class="player player${idx}"></div>`
  playerScoreboard.appendChild(players)
}
