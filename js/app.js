/*-------------------------------- Notes --------------------------------*/


//Add modal from bootsrap to confirm player category selection


/*-------------------------------- Constants --------------------------------*/
  function diceRollOne () {
    if(isUnlocked1 === true) {
      rollOutcome1 = (Math.floor(Math.random() * 6 + 1))}
    if (rollOutcome1 === 1 && isUnlocked1 === true) {
      diceOne.innerHTML = `<img src="img/dice1.png" alt="">`
    } else if (rollOutcome1 === 2 && isUnlocked1 === true) {
      diceOne.innerHTML = '<img src="img/dice2.png" alt="">'
    } else if (rollOutcome1 === 3 && isUnlocked1 === true) {
      diceOne.innerHTML = '<img src="img/dice3.png" alt="">'
    } else if (rollOutcome1 === 4 && isUnlocked1 === true) {
      diceOne.innerHTML = '<img src="img/dice4.png" alt="">'
    } else if (rollOutcome1 === 5 && isUnlocked1 === true) {
      diceOne.innerHTML = '<img src="img/dice5.png" alt="">'
    } else if (rollOutcome1 === 6 && isUnlocked1 === true) {
      diceOne.innerHTML = '<img src="img/dice6.png" alt="">'
    } 
  }


  const diceRollTwo = function () {
    if (isUnlocked2 === true) {
      rollOutcome2 = (Math.floor(Math.random() * 6 + 1))}
    if (rollOutcome2 === 1 && isUnlocked2 === true) {
      diceTwo.innerHTML = `<img src="img/dice1.png" alt="">`
    } else if (rollOutcome2 === 2 && isUnlocked2 === true) {
      diceTwo.innerHTML = '<img src="img/dice2.png" alt="">'
    } else if (rollOutcome2 === 3 && isUnlocked2 === true) {
      diceTwo.innerHTML = '<img src="img/dice3.png" alt="">'
    } else if (rollOutcome2 === 4 && isUnlocked2 === true) {
      diceTwo.innerHTML = '<img src="img/dice4.png" alt="">'
    } else if (rollOutcome2 === 5 && isUnlocked2 === true) {
      diceTwo.innerHTML = '<img src="img/dice5.png" alt="">'
    } else if (rollOutcome2 === 6 && isUnlocked2 === true) {
      diceTwo.innerHTML = '<img src="img/dice6.png" alt="">'
    }
  }

  const diceRollThree = function () {
    if (isUnlocked3 === true) {
      rollOutcome3 = (Math.floor(Math.random() * 6 + 1))}
    if (rollOutcome3 === 1 && isUnlocked3 === true) {
      diceThree.innerHTML = `<img src="img/dice1.png" alt="">`
    } else if (rollOutcome3 === 2 && isUnlocked3 === true) {
      diceThree.innerHTML = '<img src="img/dice2.png" alt="">'
    } else if (rollOutcome3 === 3 && isUnlocked3 === true) {
      diceThree.innerHTML = '<img src="img/dice3.png" alt="">'
    } else if (rollOutcome3 === 4 && isUnlocked3 === true) {
      diceThree.innerHTML = '<img src="img/dice4.png" alt="">'
    } else if (rollOutcome3 === 5 && isUnlocked3 === true) {
      diceThree.innerHTML = '<img src="img/dice5.png" alt="">'
    } else if (rollOutcome3 === 6 && isUnlocked3 === true) {
      diceThree.innerHTML = '<img src="img/dice6.png" alt="">'
    } 
  }

  const diceRollFour = function () {
    if (isUnlocked4 === true){
    rollOutcome4 = (Math.floor(Math.random() * 6 + 1))}
    if (rollOutcome4 === 1 && isUnlocked4 === true) {
      diceFour.innerHTML = `<img src="img/dice1.png" alt="">`
    } else if (rollOutcome4 === 2 && isUnlocked4 === true) {
      diceFour.innerHTML = '<img src="img/dice2.png" alt="">'
    } else if (rollOutcome4 === 3 && isUnlocked4 === true) {
      diceFour.innerHTML = '<img src="img/dice3.png" alt="">'
    } else if (rollOutcome4 === 4 && isUnlocked4 === true) {
      diceFour.innerHTML = '<img src="img/dice4.png" alt="">'
    } else if (rollOutcome4 === 5 && isUnlocked4 === true) {
      diceFour.innerHTML = '<img src="img/dice5.png" alt="">'
    } else if (rollOutcome4 === 6 && isUnlocked4 === true) {
      diceFour.innerHTML = '<img src="img/dice6.png" alt="">'
    } 
  }

  const diceRollFive = function () {
    if (isUnlocked5 === true) {
    rollOutcome5 = (Math.floor(Math.random() * 6 + 1))}
    if (rollOutcome5 === 1 && isUnlocked5 === true) {
      diceFive.innerHTML = `<img src="img/dice1.png" alt="">`
    } else if (rollOutcome5 === 2 && isUnlocked5 === true) {
      diceFive.innerHTML = '<img src="img/dice2.png" alt="">'
    } else if (rollOutcome5 === 3 && isUnlocked5 === true) {
      diceFive.innerHTML = '<img src="img/dice3.png" alt="">'
    } else if (rollOutcome5 === 4 && isUnlocked5 === true) {
      diceFive.innerHTML = '<img src="img/dice4.png" alt="">'
    } else if (rollOutcome5 === 5 && isUnlocked5 === true) {
      diceFive.innerHTML = '<img src="img/dice5.png" alt="">'
    } else if (rollOutcome5 === 6 && isUnlocked5 === true) {
      diceFive.innerHTML = '<img src="img/dice6.png" alt="">'
    } 
  }


const diceRollAudio = new Audio ('../audio/dice.wav')







/*-------------------------------- Constants --------------------------------*/
let allDice
let rollOutcome1, rollOutcome2, rollOutcome3, rollOutcome4, rollOutcome5
let playerTurn
let allPlayers
let rollCount
let playerName
let isUnlocked1, isUnlocked2, isUnlocked3, isUnlocked4, isUnlocked5
let scoreCategory
let roll1
let diceArray



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

  










/*-------------------------------- Functions --------------------------------*/
init()

function init () {
  allPlayers = []
  diceArray = []
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
  gameMsg.textContent = `<strong>How to play!</strong><br>1. Click the button to roll <br> 2. Click the locks to lock in a dice before rerolling <br> 3. Once all dice are locked in, click on the category you'd like to assing points to (hover over category to see scoring rules)`;
  scoreCategory = document.querySelectorAll(".player")
  scoreCategory.forEach((evt, idx) => {
    addEventListener('click', assignScore)
    })
  playerTurn = document.querySelectorAll(".player")
  playerTurn.forEach((evt, idx) => {
    addEventListener('click', assignScore)
    })
  render()
}

function render() {
  nextPlayerMessage()
}

function appendScoreboard(str, idx) {
  let playerBoard = document.createElement("div")
  playerBoard.classList.add("playerscore")
  playerBoard.innerHTML =
  `<div id="name" class="player player${idx + 1}">${str}</div>
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
    render()
    diceRollOne()
    diceRollTwo()
    diceRollThree()
    diceRollFour()
    diceRollFive()
    diceRollAudio.valume = .05
    diceRollAudio.play()
    if (rollCount === 3) {
      rollDiceBtn.setAttribute('hidden', true)
    } 
  }
}

function handleLockClick (event){
  let lockClick = parseInt(event.target.id.split('').pop())
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
  playerTurn = parseInt(evt.target.className.split('').pop())
  diceArray = [rollOutcome1, rollOutcome2, rollOutcome3, rollOutcome4, rollOutcome5]
  if (evt.target.id === 'ones') {
    let total = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 1){
        total = total + 1
      }
    }
    console.log(total)
  } else if (evt.target.id === 'twos') {
    let total = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 2){
        total = total + 2
      }
    }
    console.log(total)
  } else if (evt.target.id === 'threes') {
    let total = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 3){
        total = total + 3
      }
    }
    console.log(total)
  } else if (evt.target.id === 'fours') {
    let total = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 4){
        total = total + 4
      }
    }
    console.log(total)
  } else if (evt.target.id === 'fives') {
    let total = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 5){
        total = total + 5
      }
    }
    console.log(total)
  } else if (evt.target.id === 'sixes') {
    let total = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 6){
        total = total + 6
      }
    }
    console.log(total)
  } else if (evt.target.id === 'three-kind') {
    total = diceArray.reduce((prev, amt) => prev + amt)
    console.log(total)
  } else if (evt.target.id === 'four-kind') {
    total = diceArray.reduce((prev, amt) => prev + amt)
    console.log(total)
  } else if (evt.target.id === 'sm-straight') {
    score = 30
    console.log(score)
  } else if (evt.target.id === 'lg-straight') {
    score = 40
    console.log(score)
  } else if (evt.target.id === 'yahtzee') {
    score = 50
    console.log(score)
  } else if (evt.target.id === 'chance') {
    total = diceArray.reduce((prev, amt) => prev + amt)
    console.log(total)
  } else if (evt.target.id === 'yahtzee-bonus') {
    score = 50
    console.log(score)
  }
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