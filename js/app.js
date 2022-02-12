/*-------------------------------- Notes --------------------------------*/


//Add modal from bootsrap to confirm player category selection


/*-------------------------------- Constants --------------------------------*/

const diceRollOne = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1 && isUnlocked1 === true) {
    diceOne.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2 && isUnlocked1 === true) {
    diceOne.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3 && isUnlocked1 === true) {
    diceOne.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4 && isUnlocked1 === true) {
    diceOne.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5 && isUnlocked1 === true) {
    diceOne.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6 && isUnlocked1 === true) {
    diceOne.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollTwo = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1 && isUnlocked2 === true) {
    diceTwo.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2 && isUnlocked2 === true) {
    diceTwo.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3 && isUnlocked2 === true) {
    diceTwo.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4 && isUnlocked2 === true) {
    diceTwo.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5 && isUnlocked2 === true) {
    diceTwo.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6 && isUnlocked2 === true) {
    diceTwo.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollThree = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1 && isUnlocked3 === true) {
    diceThree.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2 && isUnlocked3 === true) {
    diceThree.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3 && isUnlocked3 === true) {
    diceThree.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4 && isUnlocked3 === true) {
    diceThree.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5 && isUnlocked3 === true) {
    diceThree.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6 && isUnlocked3 === true) {
    diceThree.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollFour = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1 && isUnlocked4 === true) {
    diceFour.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2 && isUnlocked4 === true) {
    diceFour.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3 && isUnlocked4 === true) {
    diceFour.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4 && isUnlocked4 === true) {
    diceFour.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5 && isUnlocked4 === true) {
    diceFour.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6 && isUnlocked4 === true) {
    diceFour.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollFive = function () {
  let rollOutcome = (Math.floor(Math.random() * 6 + 1))
  if (rollOutcome === 1 && isUnlocked5 === true) {
    diceFive.innerHTML = `<img src="img/dice1.png" alt="">`
  } else if (rollOutcome === 2 && isUnlocked5 === true) {
    diceFive.innerHTML = '<img src="img/dice2.png" alt="">'
  } else if (rollOutcome === 3 && isUnlocked5 === true) {
    diceFive.innerHTML = '<img src="img/dice3.png" alt="">'
  } else if (rollOutcome === 4 && isUnlocked5 === true) {
    diceFive.innerHTML = '<img src="img/dice4.png" alt="">'
  } else if (rollOutcome === 5 && isUnlocked5 === true) {
    diceFive.innerHTML = '<img src="img/dice5.png" alt="">'
  } else if (rollOutcome === 6 && isUnlocked5 === true) {
    diceFive.innerHTML = '<img src="img/dice6.png" alt="">'
  } 
}

const diceRollAudio = new Audio ('../audio/dice.wav')







/*-------------------------------- Constants --------------------------------*/
let allDice
let playerTurn
let allPlayers
let rollCount
let playerName
let isUnlocked1, isUnlocked2, isUnlocked3, isUnlocked4, isUnlocked5




/*------------------------ Cached Element References ------------------------*/
const playerScoreboard = document.getElementById("playerscoreboard")
const scoreboardCategories = document.querySelector('.category')
const playerInput = document.querySelector("#playerInput")
const form = document.querySelector('form')
const gameMsg = document.getElementById('game-message')
const nextUpMsg = document.querySelector('.playerUp')
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
let scoreCategory
const rollDiceBtn = document.getElementById('roll-button')
const ones = document.getElementById('ones')
const twos = document.getElementById('twos')
const threes = document.getElementById('threes')
const fours = document.getElementById('fours')
const fives = document.getElementById('fives')
const sixes = document.getElementById('sixes')
const threeOfAKind = document.getElementById('three-kind')
const fourOfAKind = document.getElementById('four-kind')
const smStraight = document.getElementById('sm-straigh')
const lgStraight = document.getElementById('lg-straight')
const yahtzee = document.getElementById('yahtzee')
const chance = document.getElementById('chance')
const yahtzBonus = document.getElementById('yahtzee-bonus')





/*----------------------------- Event Listeners -----------------------------*/
startGameBtn.addEventListener('click', startGame)
rollDiceBtn.addEventListener('click', rollDice)

lockDiceIcon.forEach((evt, idx) => {
  addEventListener('click', handleLockClick)
  })

// scoreCategory.forEach((evt, idx) => {
//   addEventListener('click', assignScore)
//   })









/*-------------------------------- Functions --------------------------------*/
init()

function init () {
  allPlayers = []
  gameMsg.innerHTML = "Enter the name of each player one by one! Start game when ready!"
  nextUpMsg.innerHTML = ''
  rollCount = 0
  playerTurn = 0
  isUnlocked1 = true
  isUnlocked2 = true
  isUnlocked3 = true
  isUnlocked4 = true
  isUnlocked5 = true
  scoreboardCategories.setAttribute("hidden", false)
  render()
  
  // startGameBtn.setAttribute("hidden", false)
}

function getPlayer(){
  playerName = playerInput.value;
  // playerInput.value = ""
  if (allPlayers.length === 6) {
    form.textContent = "Sorry, only 6 players! Start game to play!"
    } else {
    gameMsg.innerHTML = "Anyone else?<br>Press 'Start Game' when ready!"
    allPlayers.push(playerName)
    listPlayers() 
  }
  return false
}

function listPlayers (arr) {
  const newLi = document.createElement("li")
  newLi.innerHTML = `${playerInput.value} <br>`
  listNames.appendChild(newLi)
  playerInput.value = ""
}

function startGame () {
  startGameBtn.setAttribute("hidden", true)
  allPlayers.forEach((str, idx) => {
    appendScoreboard(str, idx)
  })
  gameMsg.innerHTML = "Rules: "
  listNames.textContent = "";
  gameMsg.textContent = "";
  scoreCategory = document.querySelectorAll(".player")
  scoreCategory.forEach((evt, idx) => {
    addEventListener('click', assignScore)
    })
  render()
}

// "<strong>How to play!</strong><br>1. Click the button to roll <br> 2. Click the locks to lock in a dice before rerolling <br> 3. Once all dice are locked in, click on the category you'd like to assing points to (hover over category to see scoring rules)" 

function render() {
  nextPlayerMessage()
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
  <div id="top-half-bonus" class="player player${idx + 1}"></div>
  <div id="three-kind" class="player player${idx + 1}"></div>
  <div id="four-kind" class="player player${idx + 1}"></div>
  <div id="sm-straight" class="player player${idx + 1}"></div>
  <div id="lg-straight" class="player player${idx + 1}"></div>
  <div id="yahtzee" class="player player${idx + 1}"></div>
  <div id="chance" class="player player${idx + 1}"></div>
  <div id="yahtzee-bonus" class="player player${idx + 1}"></div>
  <div id="total-score" class="player player${idx + 1}"></div>`
  playerScoreboard.appendChild(playerBoard)
}

function rollDice () {
  if (rollCount < 3) {
  rollCount = rollCount + 1
  diceRollOne()
  diceRollTwo()
  diceRollThree()
  diceRollFour()
  diceRollFive()
  render()
  diceRollAudio.valume = .05
  diceRollAudio.play()
  console.log(rollCount)
  if (rollCount === 3) {
    rollDiceBtn.setAttribute('hidden', true)
  }
  }
}

function handleLockClick (event){
  let lockClick = parseInt(event.target.id.split('').pop())
  // console.log(event.target.id)
  if (lockClick === 1) {
    if (isUnlocked1 === true) {
      isUnlocked1 = false
      diceLock1.innerHTML = ' 🔐 '
    } else {
      isUnlocked1 = true
      diceLock1.innerHTML = ' 🔓 '
    }
  } else if (lockClick === 2) {
    if (isUnlocked2 === true) {
      isUnlocked2 = false
      diceLock2.innerHTML = ' 🔐 '
    } else {
      isUnlocked2 = true
      diceLock2.innerHTML = ' 🔓 '
    }
  } else if (lockClick === 3) {
    if (isUnlocked3 === true) {
      isUnlocked3 = false
      diceLock3.innerHTML = ' 🔐 '
    } else {
      isUnlocked3 = true
      diceLock3.innerHTML = ' 🔓 '
    }
  } else if (lockClick === 4) {
    if (isUnlocked4 === true) {
      isUnlocked4 = false
      diceLock4.innerHTML = ' 🔐 '
    } else {
      isUnlocked4 = true
      diceLock4.innerHTML = ' 🔓 '
    }
  } else if (lockClick === 5) {
    if (isUnlocked5 === true) {
      isUnlocked5 = false
      diceLock5.innerHTML = ' 🔐 '
    } else {
      isUnlocked5 = true
      diceLock5.innerHTML = ' 🔓 '
    }
  } else if (isUnlocked1, isUnlocked2, isUnlocked3, isUnlocked4, isUnlocked5 === false) {
    rollDiceBtn.setAttribute('hidden', true)
  }
}

function assignScore (evt){
  console.log(evt.target.id)
}



function nextPlayerMessage (){
  if (playerTurn === 0 && allPlayers !== null){
    nextUpMsg.innerHTML = `${allPlayers[0]} is up!`
  } else if (playerTurn === 1){
    nextUpMsg.innerHTML = `${allPlayers[1]} is up!`
  } else if (playerTurn === 2){
    nextUpMsg.innerHTML = `${allPlayers[2]} is up!`
  } else if (playerTurn === 3){
    nextUpMsg.innerHTML = `${allPlayers[3]} is up!`
  } else if (playerTurn === 4){
    nextUpMsg.innerHTML = `${allPlayers[4]} is up!`
  } else if (playerTurn === 5){
    nextUpMsg.innerHTML = `${allPlayers[5]} is up!`
  } else {
    
  }
}