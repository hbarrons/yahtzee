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
let playerOneScore, playerTwoScore, playerThreeScore, playerFourScore, playerFiveScore, playerSixScore
let playerOneBonus, playerTwoBonus, playerThreeBonus, playerFourBonus, playerFiveBonus, playerSixBonus



/*------------------------ Cached Element References ------------------------*/
const playerScoreboard = document.getElementById("playerscoreboard")
const scoreboardCategories = document.querySelectorAll('.category')
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
  playerTurn = 1
  isUnlocked1 = true
  isUnlocked2 = true
  isUnlocked3 = true
  isUnlocked4 = true
  isUnlocked5 = true
  diceLock1.style.display = 'none'
  diceLock2.style.display = 'none'
  diceLock3.style.display = 'none'
  diceLock4.style.display = 'none'
  diceLock5.style.display = 'none'
  diceOne.innerHTML = ''
  diceTwo.innerHTML = ''
  diceThree.innerHTML = ''
  diceFour.innerHTML = ''
  diceFive.innerHTML = ''
  playerOneScore = []
  playerOneBonus = []
  playerTwoScore = []
  playerTwoBonus = []
  playerThreeScore = []
  playerThreeBonus = []
  playerFourScore = []
  playerFourBonus = []
  playerFiveScore = []
  playerFiveBonus = []
  playerSixScore = []
  playerSixBonus = []
  rollDiceBtn.style.display = 'none'
  render()
  startGameBtn.style.display = 'none'
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
  startGameBtn.style.display = 'block'
  return false
}

function listPlayers (arr) {
  const newLi = document.createElement("li")
  newLi.innerHTML = `${playerInput.value} <br>`
  listNames.appendChild(newLi)
  playerInput.value = ""
}

function startGame () {
  startGameBtn.style.display = 'none'
  allPlayers.forEach((str, idx) => {
    appendScoreboard(str, idx)
  })
  rollDiceBtn.style.display = 'block'
  gameMsg.innerHTML = "Rules: "
  listNames.textContent = "";
  form.style.display = 'none'
  gameMsg.innerHTML = `<strong>How to play!</strong><br>1. Click the button to roll <br> 2. Click the lock emoji lock in a dice before rerolling <br> 3. Once all dice are locked in, click on the category you'd like to assing points to.<br>Good luck, have fun!`;
  
  // because these elements aren't being added until startGame, they need to be defined here
  // cached elements
  scoreCategory = document.querySelectorAll(".player")
  scoreCategory.forEach((evt, idx) => {
    addEventListener('click', assignScore)
    })
  playerTurn = document.querySelectorAll(".player")
  playerTurn.forEach((evt, idx) => {
    addEventListener('click', assignScore, nextPlayerUp)
    })


  playerTurn = 0

  nextPlayerUp()
}

function render() {

}

function appendScoreboard(str, idx) {
  let playerBoard = document.createElement("div")
  playerBoard.classList.add("playerscore")
  playerBoard.innerHTML =

  `<div id="name player${idx + 1}" class="playerName">${str}</div>
  <div id="ones" class="player ones${idx + 1} player${idx + 1}"></div>
  <div id="twos" class="player twos${idx + 1} player${idx + 1}"></div>
  <div id="threes" class="player threes${idx + 1} player${idx + 1}"></div>
  <div id="fours" class="player fours${idx + 1} player${idx + 1}"></div>
  <div id="fives" class="player fives${idx + 1} player${idx + 1}"></div>
  <div id="sixes" class="player sixes${idx + 1} player${idx + 1}"></div>
  <div id="bonus" class="player bonus${idx + 1} player${idx + 1}"></div>
  <div id="three-kind" class="player three-kind${idx + 1} player${idx + 1}"></div>
  <div id="four-kind" class="player four-kind${idx + 1} player${idx + 1}"></div>
  <div id="full-house" class="player full-house${idx + 1} player${idx + 1}"></div>
  <div id="sm-straight" class="player sm-str${idx + 1} player${idx + 1}"></div>
  <div id="lg-straight" class="player lg-str${idx + 1} player${idx + 1}"></div>
  <div id="yahtzee" class="player yahtzee${idx + 1} player${idx + 1}"></div>
  <div id="chance" class="player chance${idx + 1} player${idx + 1}"></div>
  <div id="yahtzee-bonus" class="player yahtzee-bonus${idx + 1} player${idx + 1}"></div>
  <div id="total-score" class="player total${idx + 1} player${idx + 1}"></div>`
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
    diceLock1.style.display = 'block'
    diceLock2.style.display = 'block'
    diceLock3.style.display = 'block'
    diceLock4.style.display = 'block'
    diceLock5.style.display = 'block'
    gameMsg.innerHTML = ""
    if (rollCount ===3) {
      nextUpMsg.innerHTML = `Which category would you like to score?`
    }
    diceRollAudio.valume = .05
    diceRollAudio.play()
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
  console.log(playerTurn)
  recordScoreOnes = document.querySelector(`.ones${playerTurn}`)
  recordScoreTwos = document.querySelector(`.twos${playerTurn}`)
  recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
  recordScoreFours = document.querySelector(`.fours${playerTurn}`)
  recordScoreFives = document.querySelector(`.fives${playerTurn}`)
  recordScoreSixes = document.querySelector(`.sixes${playerTurn}`)
  recordScoreBonus = document.querySelector(`.bonus${playerTurn}`)
  recordScoreThreeKind = document.querySelector(`.three-kind${playerTurn}`)
  recordScoreFourKind = document.querySelector(`.four-kind${playerTurn}`)
  recordScoreFullHouse = document.querySelector(`.full-house${playerTurn}`)
  recordScoreSmStraight = document.querySelector(`.sm-str${playerTurn}`)
  recordScoreLgStraight = document.querySelector(`.lg-str${playerTurn}`)
  recordScoreYahtzee = document.querySelector(`.yahtzee${playerTurn}`)
  recordScoreChance = document.querySelector(`.chance${playerTurn}`)
  recordScoreYahtBonus = document.querySelector(`.yahtzee-bonus${playerTurn}`)
  diceArray = [rollOutcome1, rollOutcome2, rollOutcome3, rollOutcome4, rollOutcome5]
  if (evt.target.id === 'ones') {
    let score = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 1){
        score = score + 1
      }
    }
    if (playerTurn === 1) {
      playerOneScore.push(score)
      playerOneBonus.push(score)
      recordScoreOnes.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      playerTwoBonus.push(score)
      recordScoreOnes.innerHTML = score
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      playerThreeBonus.push(score)
      recordScoreOnes.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      playerFourBonus.push(score)
      recordScoreOnes.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      playerFiveBonus.push(score)
      recordScoreOnes.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      playerSixBonus.push(score)
      recordScoreOnes.innerHTML = score
    }
    nextPlayerUp()
  } else if (evt.target.id === 'twos') {
    let score = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 2){
        score = score + 2
      }
    }
    if (playerTurn === 1) {
      playerOneScore.push(score)
      playerOneBonus.push(score)
      recordScoreTwos.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      playerTwoBonus.push(score)
      recordScoreTwos.innerHTML = score
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      playerThreeBonus.push(score)
      recordScoreTwos.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      playerFourBonus.push(score)
      recordScoreTwos.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      playerFiveBonus.push(score)
      recordScoreTwos.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      playerSixBonus.push(score)
      recordScoreTwos.innerHTML = score
    }
    nextPlayerUp() 
  } else if (evt.target.id === 'threes') {
    let score = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 3){
        score = score + 3
      }
    }
    if (playerTurn === 1) {
      playerOneScore.push(score)
      playerOneBonus.push(score)
      recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      playerTwoBonus.push(score)
      recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      playerThreeBonus.push(score)
      recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      playerFourBonus.push(score)
      recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      playerFiveBonus.push(score)
      recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      playerSixBonus.push(score)
      recordScoreThrees = document.querySelector(`.threes${playerTurn}`)
    } 
    nextPlayerUp()
  } else if (evt.target.id === 'fours') {
    let score = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 4){
        score = score + 4
      }
    }
    if (playerTurn === 1) {
      playerOneScore.push(score)
      playerOneBonus.push(score)
      recordScoreFours.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      playerTwoBonus.push(score)
      recordScoreFours.innerHTML = score
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      playerThreeBonus.push(score)
      recordScoreFours.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      playerFourBonus.push(score)
      recordScoreFours.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      playerFiveBonus.push(score)
      recordScoreFours.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      playerSixBonus.push(score)
      recordScoreFours.innerHTML = score
    } 
    nextPlayerUp()
  } else if (evt.target.id === 'fives') {
    let score = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 5){
        score = score + 5
      }
    }
    if (playerTurn === 1) {
      playerOneScore.push(score)
      playerOneBonus.push(score)
      recordScoreFives.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      playerTwoBonus.push(score)
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      playerThreeBonus.push(score)
      recordScoreFives.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      playerFourBonus.push(score)
      recordScoreFives.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      playerFiveBonus.push(score)
      recordScoreFives.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      playerSixBonus.push(score)
      recordScoreFives.innerHTML = score
    } 
    nextPlayerUp()
  } else if (evt.target.id === 'sixes') {
    let score = 0
    for (let i=0; i < diceArray.length; i++){
      if (diceArray[i] === 6){
        score = score + 6
      }
    }
    if (playerTurn === 1) {
      playerOneScore.push(score)
      playerOneBonus.push(score)
      recordScoreSixes.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      playerTwoBonus.push(score)
      recordScoreSixes.innerHTML = score
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      playerThreeBonus.push(score)
      recordScoreSixes.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      playerFourBonus.push(score)
      recordScoreSixes.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      playerFiveBonus.push(score)
      recordScoreSixes.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      playerSixBonus.push(score)
      recordScoreSixes.innerHTML = score
    } 
    nextPlayerUp()
  } else if (evt.target.id === 'bonus') {  
    if (playerTurn === 1 && playerOneBonus.length === 5 && (playerOneBonus.reduce((prev, amt) => prev + amt)) >= 63) {
      playerOneScore.push(35)
      recordScoreBonus.innerHTML = '35'
    } else if (playerTurn === 2 && playerTwoBonus.length === 5 && (playerTwoBonus.reduce((prev, amt) => prev + amt)) >= 63) {
      playerOneScore.push(35)
      recordScoreBonus.innerHTML = '35'
    } else if (playerTurn === 3 && playerThreeBonus.length === 5 && (playerThreeBonus.reduce((prev, amt) => prev + amt)) >= 63) {
      playerOneScore.push(35)
      recordScoreBonus.innerHTML = '35'
    } else if (playerTurn === 4 && playerFourBonus.length === 5 && (playerFourBonus.reduce((prev, amt) => prev + amt)) >= 63) {
      playerOneScore.push(35)
      recordScoreBonus.innerHTML = '35'
    } else if (playerTurn === 5 && playerFiveBonus.length === 5 && (playerFiveBonus.reduce((prev, amt) => prev + amt)) >= 63) {
      playerOneScore.push(35)
      recordScoreBonus.innerHTML = '35'
    } else if (playerTurn === 6 && playerSixBonus.length === 5 && (playerSixBonus.reduce((prev, amt) => prev + amt)) >= 63) {
      playerOneScore.push(35)
      recordScoreBonus.innerHTML = '35'
    } 
    nextPlayerUp()
  } else if (evt.target.id === 'three-kind') {
    score = diceArray.reduce((prev, amt) => prev + amt)
    if (playerTurn === 1) {
      playerOneScore.push(score)
      recordScoreThreeKind.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      recordScoreThreeKind.innerHTML = score
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      recordScoreThreeKind.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      recordScoreThreeKind.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      recordScoreThreeKind.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      recordScoreThreeKind.innerHTML = score
    } 
    nextPlayerUp() 

  } else if (evt.target.id === 'four-kind') {
    score = diceArray.reduce((prev, amt) => prev + amt)
    if (playerTurn === 1) {
      playerOneScore.push(score)
      recordScoreFourKind.innerHTML = score
    } else if (playerTurn === 2){
      playerTwoScore.push(score)
      recordScoreFourKind.innerHTML = score
    } else if (playerTurn === 3){
      playerThreeScore.push(score)
      recordScoreFourKind.innerHTML = score
    } else if (playerTurn === 4){
      playerFourScore.push(score)
      recordScoreFourKind.innerHTML = score
    } else if (playerTurn === 5){
      playerFiveScore.push(score)
      recordScoreFourKind.innerHTML = score
    } else if (playerTurn === 6){
      playerSixScore.push(score)
      recordScoreFourKind.innerHTML = score
    } 
    nextPlayerUp() 
  } else if (evt.target.id === 'full-house') {
    score = 25
    recordScoreFullHouse.innerHTML = score
    nextPlayerUp() 
  } else if (evt.target.id === 'sm-straight') {
    score = 30
    recordScoreSmStraight.innerHTML = score
    nextPlayerUp() 
  } else if (evt.target.id === 'lg-straight') {
    score = 40
    recordScoreLgStraight.innerHTML = score
    nextPlayerUp() 
  } else if (evt.target.id === 'yahtzee') {
    score = 50
    recordScoreYahtzee.innerHTML = score
    nextPlayerUp() 
  } else if (evt.target.id === 'chance') {
    score = diceArray.reduce((prev, amt) => prev + amt)
    recordScoreChance.innerHTML = score
    nextPlayerUp() 
  } else if (evt.target.id === 'yahtzee-bonus') {
    score = 50
    recordScoreYahtBonus.innerHTML = score
    nextPlayerUp() 
  }
}

function nextPlayerUp (){
  if (playerTurn === allPlayers.length) {
    playerTurn = 0
  }
  playerTurn = playerTurn + 1
  if (playerTurn === 0 || playerTurn === NaN) {
    nextUpMsg.innerHTML = ""
  } else if (playerTurn === 1){
    nextUpMsg.innerHTML = `${allPlayers[0]} is up!`
    resetDice()
  } else if (playerTurn === 2){
    nextUpMsg.innerHTML = `${allPlayers[1]} is up!`
    resetDice()
  } else if (playerTurn === 3){
    nextUpMsg.innerHTML = `${allPlayers[2]} is up!`
  } else if (playerTurn === 4){
    nextUpMsg.innerHTML = `${allPlayers[3]} is up!`
  } else if (playerTurn === 5){
    nextUpMsg.innerHTML = `${allPlayers[4]} is up!`
  } else if (playerTurn === 6){
    nextUpMsg.innerHTML = `${allPlayers[5]} is up!`
  } 
  if (playerTurn === allPlayers.length) {
    playerTurn = 1
  }
  rollDiceBtn.style.display = 'block'
  resetDice()
  rollCount = 0
  resetDice()

}

function resetDice (){
  isUnlocked1 = true
  isUnlocked2 = true
  isUnlocked3 = true
  isUnlocked4 = true
  isUnlocked5 = true
  diceLock1.style.display = 'none'
  diceLock2.style.display = 'none'
  diceLock3.style.display = 'none'
  diceLock4.style.display = 'none'
  diceLock5.style.display = 'none'
  diceOne.innerHTML = ''
  diceTwo.innerHTML = ''
  diceThree.innerHTML = ''
  diceFour.innerHTML = ''
  diceFive.innerHTML = ''
}



//go to next turn if score assigned before rollCount = 3