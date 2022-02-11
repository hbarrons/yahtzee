/*-------------------------------- Notes --------------------------------*/
//Add dropdown from bootstrap for player selection

//Add modal from bootsrap to confirm player category selection


/*-------------------------------- Constants --------------------------------*/

const diceRollOne = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1) {
    diceOne.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2) {
    diceOne.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3) {
    diceOne.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4) {
    diceOne.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5) {
    diceOne.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6) {
    diceOne.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollTwo = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1) {
    diceTwo.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2) {
    diceTwo.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3) {
    diceTwo.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4) {
    diceTwo.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5) {
    diceTwo.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6) {
    diceTwo.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollThree = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1) {
    diceThree.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2) {
    diceThree.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3) {
    diceThree.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4) {
    diceThree.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5) {
    diceThree.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6) {
    diceThree.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollFour = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1) {
    diceFour.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2) {
    diceFour.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3) {
    diceFour.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4) {
    diceFour.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5) {
    diceFour.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6) {
    diceFour.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollFive = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1) {
    diceFive.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2) {
    diceFive.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3) {
    diceFive.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4) {
    diceFive.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5) {
    diceFive.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6) {
    diceFive.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollAudio = new Audio ('../audio/dice.wav')






/*-------------------------------- Constants --------------------------------*/
let allDice
let playerTurn
let allPlayers
let scoreboard
let rollCount
let playerName




/*------------------------ Cached Element References ------------------------*/
const playerScoreboard = document.getElementById("playerscoreboard")
const playerInput = document.querySelector("#playerInput")
const form = document.querySelector('form')
const gameMsg = document.getElementById('game-message')
const startGameBtn = document.querySelector('.startgame')
const listNames = document.getElementById('listofplayers')
const playerList = document.querySelector('playerlist')
const diceOne = document.getElementById('dice1')
const diceTwo = document.getElementById('dice2')
const diceThree = document.getElementById('dice3')
const diceFour = document.getElementById('dice4')
const diceFive = document.getElementById('dice5')
const diceLock1 = document.getElementById('dicelock1')
const diceLock2 = document.getElementById('dicelock2')
const diceLock3 = document.getElementById('dicelock3')
const diceLock4 = document.getElementById('dicelock4')
const diceLock5 = document.getElementById('dicelock5')
const lockDiceIcon = document.querySelectorAll(".dicelockicon")




/*----------------------------- Event Listeners -----------------------------*/
startGameBtn.addEventListener('click', startGame)
// addEventListener('click', rollDice)

lockDiceIcon.forEach((padlock, idx) => {
  addEventListener('click',handleLockClick)
  })









/*-------------------------------- Functions --------------------------------*/
init()

function init () {
  allPlayers = []
  gameMsg.innerHTML = "Enter the name of each player one by one! Start game when ready!"
  render()
  
  // startGameBtn.setAttribute("hidden", false)
}

function getPlayer(){
  playerName = playerInput.value;
  // playerInput.value = ""
  if (allPlayers.length === 6) {
    form.textContent = "Sorry, only 6 players! Start game to play!"
    } else {
    gameMsg.textContent = "Enter the name of each player one by one!"
    allPlayers.push(playerName)
    console.log(allPlayers)
    listPlayers() 
  }
  return false
}

function listPlayers (arr) {
  const newLi = document.createElement("li")
  newLi.textContent = playerInput.value
  listNames.appendChild(newLi)
  playerInput.value = ""
}

function startGame () {
  allPlayers.forEach((str, idx) => {
    appendScoreboard(str, idx)
  })
  form.innerHTML = "<strong>How to play!</strong><br>1. Click the button to roll <br> 2. Click the locks to lock in a dice before rerolling <br> 3. Once all dice are locked in, click on the category you'd like to assing points to (hover over category to see scoring rules)"
  listNames.textContent = "";
  gameMsg.textContent = "";
  startGameBtn.setAttribute("hidden", true)
}

function render() {
  
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
  playerScoreboard.appendChild(playerBoard)
}

function rollDice () {
  diceRollOne()
  diceRollTwo()
  diceRollThree()
  diceRollFour()
  diceRollFive()
  diceRollAudio.valume = .05
  diceRollAudio.play()
}

function handleLockClick (event){
  let lockClick = parseInt(event.target.id.split('').pop())
  if (lockClick === 1) {
    diceLock1.innerHTML = ' 🔐 '
  } else if (lockClick === 2) {
    diceLock2.innerHTML = ' 🔐 '
  } else if (lockClick === 3) {
    diceLock3.innerHTML = ' 🔐 '
  } else if (lockClick === 4) {
    diceLock4.innerHTML = ' 🔐 '
  } else if (lockClick === 5) {
    diceLock5.innerHTML = ' 🔐 '
  }

}

