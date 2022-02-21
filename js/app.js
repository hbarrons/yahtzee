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

/*-------------------------------- Variables --------------------------------*/
let allDice
let rollOutcome1, rollOutcome2, rollOutcome3, rollOutcome4, rollOutcome5
let playerTurn
let allPlayers
let rollCount
let playerName
let isUnlocked1, isUnlocked2, isUnlocked3, isUnlocked4, isUnlocked5
let scoreCategory
let roll1
let diceArray, diceSort, diceCount, diceSortYahtzee
let threeKind, fourKind, isYahtzee, largeStraight, smallStraight, fullHouse
let playerOneScore, playerTwoScore, playerThreeScore, playerFourScore, playerFiveScore, playerSixScore
let playerOneBonus, playerTwoBonus, playerThreeBonus, playerFourBonus, playerFiveBonus, playerSixBonus
let player1bonus, player2bonus, player3bonus, player4bonus, player5bonus, player6bonus
let playerOneYahtBonus, playerTwoYahtBonus, playerThreeYahtBonus, playerFourYahtBonus, playerFiveYahtBonus, playerSixYahtBonus
let playerOneTotal, playerTwoTotal, playerThreeTotal, playerFourTotal, playerFiveTotal, playerSixTotal
let playerOneFinal, playerTwoFinal, playerThreeFinal, playerFourFinal, playerFiveFinal, playerSixFinal
let oneBonusApplied, twoBonusApplied, threeBonusApplied, fourBonusApplied, fiveBonusApplied, sixBonusApplied
let finalScores
let winner 
let winningPlayer

/*------------------------ Cached Element References ------------------------*/
const playerScoreboard = document.getElementById("playerscoreboard")
const player = document.querySelectorAll('.player')
const scoreboardCategories = document.querySelectorAll('.category')
const playerInput = document.querySelector("#playerInput")
const form = document.querySelector('form')
const gameMsg = document.getElementById('game-message')
const nextUpMsg = document.querySelector('.playerUp')
const startGameBtn = document.querySelector('.startgame')
const resetGameBtn = document.getElementById('reset-game')
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
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")


/*----------------------------- Event Listeners -----------------------------*/
startGameBtn.addEventListener('click', startGame)
rollDiceBtn.addEventListener('click', rollDice)
lockDiceIcon.forEach((evt, idx) => {
  addEventListener('click', handleLockClick)
  })
resetGameBtn.addEventListener('click', init)
lightDarkBtn.addEventListener('click', toggleLightDark)

/*-------------------------------- Functions --------------------------------*/
init()

function init () {
  allPlayers = []
  diceArray = []
  gameMsg.innerHTML = "Enter the name of each player one by one!<br>Start game when ready!"
  gameMsg.style.textAlign = 'center'
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
  playerOneYahtBonus = []
  playerTwoYahtBonus = []
  playerThreeYahtBonus = []
  playerFourYahtBonus = []
  playerFiveYahtBonus = []
  playerSixYahtBonus = []
  diceSort = []
  diceCount = {}
  finalScores = {}
  oneBonusApplied = false
  twoBonusApplied = false
  threeBonusApplied = false
  fourBonusApplied = false
  fiveBonusApplied = false
  sixBonusApplied = false
  fourKind = false
  threeKind = false
  fullHouse = false
  isYahtzee = false
  largeStraight = false
  smallStraight = false
  rollDiceBtn.style.display = 'none'
  startGameBtn.style.display = 'none'
  resetGameBtn.style.display = 'none'
  form.style.display = 'block'
  playerScoreboard.innerHTML = ""
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
  gameMsg.innerHTML = `<strong>How to play!</strong><br>1. Click the button to roll <br> 2. To keep a dice, click on the lock emoji lock. It will switch to a lock and key emoji and that dice will be locked in when you roll again. <br> 3. After three rolls (or less if you have the outcome you want) click on the category you'd like to assing points to. Be sure to click on your player column!<br>4. If you need to scratch, click on the category you'd like to scrach and 0 points will be assigned. <br>5. Good luck, have fun!`;
  gameMsg.style.textAlign = 'left'
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

function appendScoreboard(str, idx) {
  let playerBoard = document.createElement("div")
  playerBoard.classList.add("playerscore")
  playerBoard.innerHTML =
  `<div id="name player${idx + 1}" class="player playerName">${str}</div>
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
    diceRollOne()
    diceRollTwo()
    diceRollThree()
    diceRollFour()
    diceRollFive()
    diceArray = [rollOutcome1, rollOutcome2, rollOutcome3, rollOutcome4, rollOutcome5]
    celebrateYahtzee()
    diceOne.style.display = 'block'
    diceTwo.style.display = 'block'
    diceThree.style.display = 'block'
    diceFour.style.display = 'block'
    diceFive.style.display = 'block'
    diceLock1.style.display = 'block'
    diceLock2.style.display = 'block'
    diceLock3.style.display = 'block'
    diceLock4.style.display = 'block'
    diceLock5.style.display = 'block'
    gameMsg.innerHTML = ""
    if (rollCount === 3) {
      if (playerTurn === 1){
        nextUpMsg.innerHTML = `${allPlayers[0]}, which category would you like to score?`
      } else if (playerTurn === 2){
        nextUpMsg.innerHTML = `${allPlayers[1]}, which category would you like to score?`
      } else if (playerTurn === 3){
        nextUpMsg.innerHTML = `${allPlayers[2]}, which category would you like to score?`
      } else if (playerTurn === 4){
        nextUpMsg.innerHTML = `${allPlayers[3]}, which category would you like to score?`
      } else if (playerTurn === 5){
        nextUpMsg.innerHTML = `${allPlayers[4]}, which category would you like to score?`
      } else if (playerTurn === 6){
        nextUpMsg.innerHTML = `${allPlayers[5]}, which category would you like to score?`
      } 
      rollDiceBtn.style.display = 'none'
    }
    if (rollCount === 1) {
      nextUpMsg.innerHTML = `Roll again or select a category to score!`
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
  recordScoreFinal = document.querySelector(`.total${playerTurn}`)
  if (rollCount >= 1) {
    if (evt.target.id === 'ones') {
      let score = 0
      for (let i=0; i < diceArray.length; i++){
        if (diceArray[i] === 1){
          score = score + 1
        }
      }
      if (playerTurn === 1 && evt.target.classList == `player ones1 player1`) {
        playerOneScore.push(score)
        playerOneBonus.push(score)
        recordScoreOnes.innerHTML = score
        nextPlayerUp()
      } 
      else if (playerTurn === 2 && evt.target.classList == `player ones2 player2`){
        playerTwoScore.push(score)
        playerTwoBonus.push(score)
        recordScoreOnes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 3 && evt.target.classList == `player ones3 player3`){
        playerThreeScore.push(score)
        playerThreeBonus.push(score)
        recordScoreOnes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 4 && evt.target.classList == `player ones4 player4`){
        playerFourScore.push(score)
        playerFourBonus.push(score)
        recordScoreOnes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 5 && evt.target.classList == `player ones5 player5`){
        playerFiveScore.push(score)
        playerFiveBonus.push(score)
        recordScoreOnes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 6 && evt.target.classList == `player ones6 player6`){
        playerSixScore.push(score)
        playerSixBonus.push(score)
        recordScoreOnes.innerHTML = score
        nextPlayerUp()
      }
      checkForTopBonus()
      getFinalScore()
    } else if (evt.target.id === 'twos') {
      let score = 0
      for (let i=0; i < diceArray.length; i++){
        if (diceArray[i] === 2){
          score = score + 2
        }
      }
      if (playerTurn === 1 && evt.target.classList == `player twos1 player1`) {
        playerOneScore.push(score)
        playerOneBonus.push(score)
        recordScoreTwos.innerHTML = score
        nextPlayerUp() 
      } else if (playerTurn === 2 && evt.target.classList == `player twos2 player2`){
        playerTwoScore.push(score)
        playerTwoBonus.push(score)
        recordScoreTwos.innerHTML = score
        nextPlayerUp() 
      } else if (playerTurn === 3 && evt.target.classList == `player twos3 player3`){
        playerThreeScore.push(score)
        playerThreeBonus.push(score)
        recordScoreTwos.innerHTML = score
        nextPlayerUp() 
      } else if (playerTurn === 4 && evt.target.classList == `player twos4 player4`){
        playerFourScore.push(score)
        playerFourBonus.push(score)
        recordScoreTwos.innerHTML = score
        nextPlayerUp() 
      } else if (playerTurn === 5 && evt.target.classList == `player twos5 player5`){
        playerFiveScore.push(score)
        playerFiveBonus.push(score)
        recordScoreTwos.innerHTML = score
        nextPlayerUp() 
      } else if (playerTurn === 6 && evt.target.classList == `player twos6 player6`){
        playerSixScore.push(score)
        playerSixBonus.push(score)
        recordScoreTwos.innerHTML = score
        nextPlayerUp() 
      }
      checkForTopBonus()
      getFinalScore()
    } else if (evt.target.id === 'threes') {
      let score = 0
      for (let i=0; i < diceArray.length; i++){
        if (diceArray[i] === 3){
          score = score + 3
        }
      }
      if (playerTurn === 1 && evt.target.classList == `player threes1 player1`) {
        playerOneScore.push(score)
        playerOneBonus.push(score)
        recordScoreThrees.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 2 && evt.target.classList == `player threes2 player2`){
        playerTwoScore.push(score)
        playerTwoBonus.push(score)
        recordScoreThrees.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 3 && evt.target.classList == `player threes3 player3`){
        playerThreeScore.push(score)
        playerThreeBonus.push(score)
        recordScoreThrees.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 4 && evt.target.classList == `player threes4 player4`){
        playerFourScore.push(score)
        playerFourBonus.push(score)
        recordScoreThrees.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 5 && evt.target.classList == `player threes5 player5`){
        playerFiveScore.push(score)
        playerFiveBonus.push(score)
        recordScoreThrees.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 6 && evt.target.classList == `player threes6 player6`){
        playerSixScore.push(score)
        playerSixBonus.push(score)
        recordScoreThrees.innerHTML = score
        nextPlayerUp()
      } 
      checkForTopBonus()
      getFinalScore()
    } else if (evt.target.id === 'fours') {
      let score = 0
      for (let i=0; i < diceArray.length; i++){
        if (diceArray[i] === 4){
          score = score + 4
        }
      }
      if (playerTurn === 1 && evt.target.classList == `player fours1 player1`) {
        playerOneScore.push(score)
        playerOneBonus.push(score)
        recordScoreFours.innerHTML = score
        nextPlayerUp()
        
      } else if (playerTurn === 2 && evt.target.classList == `player fours2 player2`){
        playerTwoScore.push(score)
        playerTwoBonus.push(score)
        recordScoreFours.innerHTML = score
        nextPlayerUp()
        
      } else if (playerTurn === 3 && evt.target.classList == `player fours3 player3`){
        playerThreeScore.push(score)
        playerThreeBonus.push(score)
        recordScoreFours.innerHTML = score
        nextPlayerUp()
        
      } else if (playerTurn === 4 && evt.target.classList == `player fours4 player4`){
        playerFourScore.push(score)
        playerFourBonus.push(score)
        recordScoreFours.innerHTML = score
        nextPlayerUp()
        
      } else if (playerTurn === 5 && evt.target.classList == `player fours5 player5`){
        playerFiveScore.push(score)
        playerFiveBonus.push(score)
        recordScoreFours.innerHTML = score
        nextPlayerUp()
        
      } else if (playerTurn === 6 && evt.target.classList == `player fours6 player6`){
        playerSixScore.push(score)
        playerSixBonus.push(score)
        recordScoreFours.innerHTML = score
        nextPlayerUp()
      } 
      checkForTopBonus()
      getFinalScore()
    } else if (evt.target.id === 'fives') {
      let score = 0
      for (let i=0; i < diceArray.length; i++){
        if (diceArray[i] === 5){
          score = score + 5
        }
      }
      if (playerTurn === 1 && evt.target.classList == `player fives1 player1`) {
        playerOneScore.push(score)
        playerOneBonus.push(score)
        recordScoreFives.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 2 && evt.target.classList == `player fives2 player2`){
        playerTwoScore.push(score)
        playerTwoBonus.push(score)
        recordScoreFives.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 3 && evt.target.classList == `player fives3 player3`){
        playerThreeScore.push(score)
        playerThreeBonus.push(score)
        recordScoreFives.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 4 && evt.target.classList == `player fives4 player4`){
        playerFourScore.push(score)
        playerFourBonus.push(score)
        recordScoreFives.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 5 && evt.target.classList == `player fives5 player5`){
        playerFiveScore.push(score)
        playerFiveBonus.push(score)
        recordScoreFives.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 6 && evt.target.classList == `player fives6 player6`){
        playerSixScore.push(score)
        playerSixBonus.push(score)
        recordScoreFives.innerHTML = score
        nextPlayerUp()
      } 
      checkForTopBonus()
      getFinalScore()
    } else if (evt.target.id === 'sixes') {
      let score = 0
      for (let i=0; i < diceArray.length; i++){
        if (diceArray[i] === 6){
          score = score + 6
        }
      }
      if (playerTurn === 1 && evt.target.classList == `player sixes1 player1`) {
        playerOneScore.push(score)
        playerOneBonus.push(score)
        recordScoreSixes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 2 && evt.target.classList == `player sixes2 player2`){
        playerTwoScore.push(score)
        playerTwoBonus.push(score)
        recordScoreSixes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 3 && evt.target.classList == `player sixes3 player3`){
        playerThreeScore.push(score)
        playerThreeBonus.push(score)
        recordScoreSixes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 4 && evt.target.classList == `player sixes4 player4`){
        playerFourScore.push(score)
        playerFourBonus.push(score)
        recordScoreSixes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 5 && evt.target.classList == `player sixes5 player5`){
        playerFiveScore.push(score)
        playerFiveBonus.push(score)
        recordScoreSixes.innerHTML = score
        nextPlayerUp()
      } else if (playerTurn === 6 && evt.target.classList == `player sixes6 player6`){
        playerSixScore.push(score)
        playerSixBonus.push(score)
        recordScoreSixes.innerHTML = score
        nextPlayerUp()
      } 
      checkForTopBonus()
      getFinalScore()
    } else if (evt.target.id === 'three-kind') {
      score = diceArray.reduce((prev, amt) => prev + amt)
      countLikeDice()
      if (threeKind === false) {
        if (playerTurn === 1 && evt.target.classList == `player three-kind1 player1`) {
          playerOneScore.push(parseInt(0))
          recordScoreThreeKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 2 && evt.target.classList == `player three-kind2 player2`){
          playerTwoScore.push(parseInt(0))
          recordScoreThreeKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 3 && evt.target.classList == `player three-kind3 player3`){
          playerThreeScore.push(parseInt(0))
          recordScoreThreeKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 4 && evt.target.classList == `player three-kind4 player4`){
          playerFourScore.push(parseInt(0))
          recordScoreThreeKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 5 && evt.target.classList == `player three-kind5 player5`){
          playerFiveScore.push(parseInt(0))
          recordScoreThreeKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 6 && evt.target.classList == `player three-kind6 player6`){
          playerSixScore.push(parseInt(0))
          recordScoreThreeKind.innerHTML = '0'
          nextPlayerUp() 
        } 
      } else if (threeKind === true) {
        if (playerTurn === 1 && evt.target.classList == `player three-kind1 player1`) {
          playerOneScore.push(score)
          recordScoreThreeKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 2 && evt.target.classList == `player three-kind2 player2`){
          playerTwoScore.push(score)
          recordScoreThreeKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 3 && evt.target.classList == `player three-kind3 player3`){
          playerThreeScore.push(score)
          recordScoreThreeKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 4 && evt.target.classList == `player three-kind4 player4`){
          playerFourScore.push(score)
          recordScoreThreeKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 5 && evt.target.classList == `player three-kind5 player5`){
          playerFiveScore.push(score)
          recordScoreThreeKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 6 && evt.target.classList == `player three-kind6 player6`){
          playerSixScore.push(score)
          recordScoreThreeKind.innerHTML = score
          nextPlayerUp() 
        } 
      }
      getFinalScore()
    } else if (evt.target.id === 'four-kind') {
      score = diceArray.reduce((prev, amt) => prev + amt)
      countLikeDice()
      if (fourKind === false) {
        if (playerTurn === 1 && evt.target.classList == `player four-kind1 player1`) {
          playerOneScore.push(parseInt(0))
          recordScoreFourKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 2 && evt.target.classList == `player four-kind2 player2`){
          playerTwoScore.push(parseInt(0))
          recordScoreFourKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 3 && evt.target.classList == `player four-kind3 player3`){
          playerThreeScore.push(parseInt(0))
          recordScoreFourKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 4 && evt.target.classList == `player four-kind4 player4`){
          playerFourScore.push(parseInt(0))
          recordScoreFourKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 5 && evt.target.classList == `player four-kind5 player5`){
          playerFiveScore.push(parseInt(0))
          recordScoreFourKind.innerHTML = '0'
          nextPlayerUp() 
        } else if (playerTurn === 6 && evt.target.classList == `player four-kind6 player6`){
          playerSixScore.push(parseInt(0))
          recordScoreFourKind.innerHTML = '0'
          nextPlayerUp() 
        } 
      } else if (fourKind === true) {
        if (playerTurn === 1 && evt.target.classList == `player four-kind1 player1`) {
          playerOneScore.push(score)
          recordScoreFourKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 2 && evt.target.classList == `player four-kind2 player2`){
          playerTwoScore.push(score)
          recordScoreFourKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 3 && evt.target.classList == `player four-kind3 player3`){
          playerThreeScore.push(score)
          recordScoreFourKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 4 && evt.target.classList == `player four-kind4 player4`){
          playerFourScore.push(score)
          recordScoreFourKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 5 && evt.target.classList == `player four-kind5 player5`){
          playerFiveScore.push(score)
          recordScoreFourKind.innerHTML = score
          nextPlayerUp() 
        } else if (playerTurn === 6 && evt.target.classList == `player four-kind6 player6`){
          playerSixScore.push(score)
          recordScoreFourKind.innerHTML = score
          nextPlayerUp() 
        } 
      }
      getFinalScore()
    } else if (evt.target.id === 'full-house') {
      score = 25
      countLikeDice()
      if (fullHouse === true) {
        if (playerTurn === 1 && evt.target.classList == `player full-house1 player1`) {
          playerOneScore.push(score)
          recordScoreFullHouse.innerHTML = score
          nextPlayerUp()
        }
        if (playerTurn === 2 && evt.target.classList == `player full-house2 player2`) {
          playerTwoScore.push(score)
          recordScoreFullHouse.innerHTML = score
          nextPlayerUp()
        }
        if (playerTurn === 3 && evt.target.classList == `player full-house3 player3`) {
          playerThreeScore.push(score)
          recordScoreFullHouse.innerHTML = score
          nextPlayerUp()
        }
        if (playerTurn === 4 && evt.target.classList == `player full-house4 player4`) {
          playerFourScore.push(score)
          recordScoreFullHouse.innerHTML = score
          nextPlayerUp()
        }
        if (playerTurn === 5 && evt.target.classList == `player full-house5 player5`) {
          playerFiveScore.push(score)
          recordScoreFullHouse.innerHTML = score
          nextPlayerUp()
        }
        if (playerTurn === 6 && evt.target.classList == `player full-house6 player6`) {
          playerSixScore.push(score)
          recordScoreFullHouse.innerHTML = score
          nextPlayerUp()
        }
      } else if (fullHouse === false) {
        if (playerTurn === 1 && evt.target.classList == `player full-house1 player1`) {
          playerOneScore.push(parseInt(0))
          recordScoreFullHouse.innerHTML = '0'
          nextPlayerUp()
        }
        if (playerTurn === 2 && evt.target.classList == `player full-house2 player2`) {
          playerTwoScore.push(parseInt(0))
          recordScoreFullHouse.innerHTML = '0'
          nextPlayerUp()
        }
        if (playerTurn === 3 && evt.target.classList == `player full-house3 player3`) {
          playerThreeScore.push(parseInt(0))
          recordScoreFullHouse.innerHTML = '0'
          nextPlayerUp()
        }
        if (playerTurn === 4 && evt.target.classList == `player full-house4 player4`) {
          playerFourScore.push(parseInt(0))
          recordScoreFullHouse.innerHTML = '0'
          nextPlayerUp()
        }
        if (playerTurn === 5 && evt.target.classList == `player full-house5 player5`) {
          playerFiveScore.push(parseInt(0))
          recordScoreFullHouse.innerHTML = '0'
          nextPlayerUp()
        }
        if (playerTurn === 6 && evt.target.classList == `player full-house6 player6`) {
          playerSixScore.push(parseInt(0))
          recordScoreFullHouse.innerHTML = '0'
          nextPlayerUp()
        }
      }
      getFinalScore()
    } else if (evt.target.id === 'sm-straight') {
      score = 30
      checkSmStraight()
      if (smallStraight === true) {
        if (playerTurn === 1 && evt.target.classList == `player sm-str1 player1`) {
          playerOneScore.push(score)
          recordScoreSmStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 2 && evt.target.classList == `player sm-str2 player2`) {
          playerTwoScore.push(score)
          recordScoreSmStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 3 && evt.target.classList == `player sm-str3 player3`) {
          playerThreeScore.push(score)
          recordScoreSmStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 4 && evt.target.classList == `player sm-str4 player4`) {
          playerFourScore.push(score)
          recordScoreSmStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 5 && evt.target.classList == `player sm-str5 player5`) {
          playerFiveScore.push(score)
          recordScoreSmStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 6 && evt.target.classList == `player sm-str6 player6`) {
          playerSixScore.push(score)
          recordScoreSmStraight.innerHTML = score
          nextPlayerUp() 
        }
      } else if (smallStraight === false) {
        if (playerTurn === 1 && evt.target.classList == `player sm-str1 player1`) {
          playerOneScore.push(parseInt(0))
          recordScoreSmStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 2 && evt.target.classList == `player sm-str2 player2`) {
          playerTwoScore.push(parseInt(0))
          recordScoreSmStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 3 && evt.target.classList == `player sm-str3 player3`) {
          playerThreeScore.push(parseInt(0))
          recordScoreSmStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 4 && evt.target.classList == `player sm-str4 player4`) {
          playerFourScore.push(parseInt(0))
          recordScoreSmStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 5 && evt.target.classList == `player sm-str5 player5`) {
          playerFiveScore.push(parseInt(0))
          recordScoreSmStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 6 && evt.target.classList == `player sm-str6 player6`) {
          playerSixScore.push(parseInt(0))
          recordScoreSmStraight.innerHTML = '0'
          nextPlayerUp() 
        }
      }
      getFinalScore()
    } else if (evt.target.id === 'lg-straight') {
      score = 40
      checkLgStraight()
      if (largeStraight === true) {
        if (playerTurn === 1 && evt.target.classList == `player lg-str1 player1`) {
          playerOneScore.push(score)
          recordScoreLgStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 2 && evt.target.classList == `player lg-str2 player2`) {
          playerTwoScore.push(score)
          recordScoreLgStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 3 && evt.target.classList == `player lg-str3 player3`) {
          playerThreeScore.push(score)
          recordScoreLgStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 4 && evt.target.classList == `player lg-str4 player4`) {
          playerFourScore.push(score)
          recordScoreLgStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 5 && evt.target.classList == `player lg-str5 player5`) {
          playerFiveScore.push(score)
          recordScoreLgStraight.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 6 && evt.target.classList == `player lg-str6 player6`) {
          playerSixScore.push(score)
          recordScoreLgStraight.innerHTML = score
          nextPlayerUp() 
        }
      } else if (largeStraight === false) {
        if (playerTurn === 1 && evt.target.classList == `player lg-str1 player1`) {
          playerOneScore.push(parseInt(0))
          recordScoreLgStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 2 && evt.target.classList == `player lg-str2 player2`) {
          playerTwoScore.push(parseInt(0))
          recordScoreLgStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 3 && evt.target.classList == `player lg-str3 player3`) {
          playerThreeScore.push(parseInt(0))
          recordScoreLgStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 4 && evt.target.classList == `player lg-str4 player4`) {
          playerFourScore.push(parseInt(0))
          recordScoreLgStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 5 && evt.target.classList == `player lg-str5 player5`) {
          playerFiveScore.push(parseInt(0))
          recordScoreLgStraight.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 6 && evt.target.classList == `player lg-str6 player6`) {
          playerSixScore.push(parseInt(0))
          recordScoreLgStraight.innerHTML = '0'
          nextPlayerUp() 
        }
      }
      getFinalScore()
    } else if (evt.target.id === 'yahtzee') {
      score = 50
      countLikeDice()
      if (isYahtzee === true) {
        if (playerTurn === 1 && evt.target.classList == `player yahtzee1 player1`) {
          playerOneScore.push(score)
          recordScoreYahtzee.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 2 && evt.target.classList == `player yahtzee2 player2`) {
          playerTwoScore.push(score)
          recordScoreYahtzee.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 3 && evt.target.classList == `player yahtzee3 player3`) {
          playerThreeScore.push(score)
          recordScoreYahtzee.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 4 && evt.target.classList == `player yahtzee4 player4`) {
          playerFourScore.push(score)
          recordScoreYahtzee.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 5 && evt.target.classList == `player yahtzee5 player5`) {
          playerFiveScore.push(score)
          recordScoreYahtzee.innerHTML = score
          nextPlayerUp() 
        }
        if (playerTurn === 6 && evt.target.classList == `player yahtzee6 player6`) {
          playerSixScore.push(score)
          recordScoreYahtzee.innerHTML = score
          nextPlayerUp() 
        }
      } else if (isYahtzee === false) {
        if (playerTurn === 1 && evt.target.classList == `player yahtzee1 player1`) {
          playerOneScore.push(parseInt(0))
          recordScoreYahtzee.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 2 && evt.target.classList == `player yahtzee2 player2`) {
          playerTwoScore.push(parseInt(0))
          recordScoreYahtzee.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 3 && evt.target.classList == `player yahtzee3 player3`) {
          playerThreeScore.push(parseInt(0))
          recordScoreYahtzee.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 4 && evt.target.classList == `player yahtzee4 player4`) {
          playerFourScore.push(parseInt(0))
          recordScoreYahtzee.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 5 && evt.target.classList == `player yahtzee5 player5`) {
          playerFiveScore.push(parseInt(0))
          recordScoreYahtzee.innerHTML = '0'
          nextPlayerUp() 
        }
        if (playerTurn === 6 && evt.target.classList == `player yahtzee6 player6`) {
          playerSixScore.push(parseInt(0))
          recordScoreYahtzee.innerHTML = '0'
          nextPlayerUp() 
        }
      }
      getFinalScore()
    } else if (evt.target.id === 'chance') {
      score = diceArray.reduce((prev, amt) => prev + amt)
      if (playerTurn === 1 && evt.target.classList == `player chance1 player1`) {
        playerOneScore.push(score)
        recordScoreChance.innerHTML = score
        nextPlayerUp() 
      }
      if (playerTurn === 2 && evt.target.classList == `player chance2 player2`) {
        playerTwoScore.push(score)
        recordScoreChance.innerHTML = score
        nextPlayerUp() 
      }
      if (playerTurn === 3 && evt.target.classList == `player chance3 player3`) {
        playerThreeScore.push(score)
        recordScoreChance.innerHTML = score
        nextPlayerUp() 
      }
      if (playerTurn === 4 && evt.target.classList == `player chance4 player4`) {
        playerFourScore.push(score)
        recordScoreChance.innerHTML = score
        nextPlayerUp() 
      }
      if (playerTurn === 5 && evt.target.classList == `player chance5 player5`) {
        playerFiveScore.push(score)
        recordScoreChance.innerHTML = score
        nextPlayerUp() 
      }
      if (playerTurn === 6 && evt.target.classList == `player chance6 player6`) {
        playerSixScore.push(score)
        recordScoreChance.innerHTML = score
        nextPlayerUp() 
      }
      getFinalScore()
    } else if (evt.target.id === 'yahtzee-bonus') {
      score = 50
      countLikeDice()
      if (isYahtzee === false) {
  
      } else if (isYahtzee === true) {
        if (playerTurn === 1 && evt.target.classList == `player yahtzee-bonus1 player1`) {
          playerOneYahtBonus.push(score)
          if (playerOneYahtBonus.length === 0) {
          recordScoreYahtBonus.innerHTML = score
            } else if (playerOneYahtBonus.length >= 1) {
              score = 0
              for (let i=0; i < playerOneYahtBonus.length; i++) {
                score = score + playerOneYahtBonus[i]
              }
              recordScoreYahtBonus.innerHTML = score
              nextPlayerUp() 
            }
        }
        if (playerTurn === 2 && evt.target.classList == `player yahtzee-bonus2 player2`) {
          playerTwoYahtBonus.push(score)
          if (playerTwoYahtBonus.length === 0) {
            recordScoreYahtBonus.innerHTML = score
            } else if (playerTwoYahtBonus.length >= 1) {
              score = 0
              for (let i=0; i < playerTwoYahtBonus.length; i++) {
                score = score + playerTwoYahtBonus[i]
              }
              recordScoreYahtBonus.innerHTML = score
              nextPlayerUp() 
            }
        }
        if (playerTurn === 3 && evt.target.classList == `player yahtzee-bonus3 player3`) {
          playerThreeYahtBonus.push(score)
          if (playerThreeYahtBonus.length === 0) {
            recordScoreYahtBonus.innerHTML = score
            } else if (playerThreeYahtBonus.length >= 1) {
              score = 0
              for (let i=0; i < playerThreeYahtBonus.length; i++) {
                score = score + playerThreeYahtBonus[i]
              }
              recordScoreYahtBonus.innerHTML = score
              nextPlayerUp() 
            }
        }
        if (playerTurn === 4 && evt.target.classList == `player yahtzee-bonus4 player4`) {
          playerFourYahtBonus.push(score)
          if (playerFourYahtBonus.length === 0) {
            recordScoreYahtBonus.innerHTML = score
            } else if (playerFourYahtBonus.length >= 1) {
              score = 0
              for (let i=0; i < playerFourYahtBonus.length; i++) {
                score = score + playerFourYahtBonus[i]
              }
              recordScoreYahtBonus.innerHTML = score
              nextPlayerUp() 
            }
        }
        if (playerTurn === 5 && evt.target.classList == `player yahtzee-bonus5 player5`) {
          playerFiveYahtBonus.push(score)
          if (playerFiveYahtBonus.length === 0) {
            recordScoreYahtBonus.innerHTML = score
            } else if (playerFiveYahtBonus.length >= 1) {
              score = 0
              for (let i=0; i < playerFiveYahtBonus.length; i++) {
                score = score + playerFiveYahtBonus[i]
              }
              recordScoreYahtBonus.innerHTML = score
              nextPlayerUp() 
            }
        }
        if (playerTurn === 6 && evt.target.classList == `player yahtzee-bonus6 player6`) {
          playerSixYahtBonus.push(score)
          if (playerSixYahtBonus.length === 0) {
            recordScoreYahtBonus.innerHTML = score
            } else if (playerSixYahtBonus.length >= 1) {
              score = 0
              for (let i=0; i < playerSixYahtBonus.length; i++) {
                score = score + playerSixYahtBonus[i]
              }
              recordScoreYahtBonus.innerHTML = score
              nextPlayerUp() 
            }
        }
      }
    }
  }
  gameOver()
}

function countLikeDice () {
  threeKind = false
  fourKind = false
  isYahtzee = false
  diceSort = []
  diceCount = {}
  diceArray.forEach(function (num) {
    diceCount[num] = (diceCount[num] || 0) + 1
  })
  for (num in diceCount) {
    diceSort.push([num, diceCount[num]])
  }
  diceSort.sort(function (a,b) {
    return b[1]-a[1]
  })
  if (diceSort[0][1] === 3 || diceSort[0][1] === 4) {
    threeKind = true
  }
  if (diceSort[0][1] === 4) {
    fourKind = true
  }
  if (diceSort[0][1] === 5) {
    isYahtzee = true
  }
  if (diceSort[0][1] === 3 && diceSort[1][1] === 2) {
    fullHouse = true
  }
}

function celebrateYahtzee () {
  diceSortYahtzee = []
  diceCount = {}
  diceArray.forEach(function (num) {
    diceCount[num] = (diceCount[num] || 0) + 1
  })
  for (num in diceCount) {
    diceSortYahtzee.push([num, diceCount[num]])
  }
  diceSortYahtzee.sort(function (a,b) {
    return b[1]-a[1]
  })
  if (diceSortYahtzee[0][1] === 5) {
    confetti.start(2000)
  }
}

function checkLgStraight() {
  largeStraight = false;
  diceArray.sort(function(a, b) {
    return a - b;
  });
  let max = Math.max.apply(null, diceArray.slice(1, diceArray.length));
  let max2 = Math.max.apply(null, diceArray.slice(0, diceArray.length-1));
  let min2 = Math.min.apply(null, diceArray.slice(1, diceArray.length));
  let min = Math.min.apply(null, diceArray.slice(0, diceArray.length-1));
  if (max - min === 4 && max2 - min2 === 2) {
      largeStraight = true;
    }
}

function checkSmStraight() {
  smallStraight = false;
  diceArray.sort(function(a, b) {
    return a - b;
  });
  let max1 = Math.max.apply(null, diceArray.slice(1, diceArray.length));
  let max2 = Math.max.apply(null, diceArray.slice(0, diceArray.length-1));
  let min2 = Math.min.apply(null, diceArray.slice(1, diceArray.length));
  let min1 = Math.min.apply(null, diceArray.slice(0, diceArray.length-1));
  if (max1 - min1 === 3 || max2 - min2 === 3 || max1 - min1 === 4 || (max1 - min1 === 5 && max2 - min2 === 2)) {
      smallStraight = true;
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
  } else if (playerTurn === 2){
    nextUpMsg.innerHTML = `${allPlayers[1]} is up!`
  } else if (playerTurn === 3){
    nextUpMsg.innerHTML = `${allPlayers[2]} is up!`
  } else if (playerTurn === 4){
    nextUpMsg.innerHTML = `${allPlayers[3]} is up!`
  } else if (playerTurn === 5){
    nextUpMsg.innerHTML = `${allPlayers[4]} is up!`
  } else if (playerTurn === 6){
    nextUpMsg.innerHTML = `${allPlayers[5]} is up!`
  } 

  rollDiceBtn.style.display = 'block'
  rollCount = 0
  resetDice()
}

function resetDice (){
  isUnlocked1 = true
  isUnlocked2 = true
  isUnlocked3 = true
  isUnlocked4 = true
  isUnlocked5 = true
  diceLock1.innerHTML = ' 🔓 '
  diceLock2.innerHTML = ' 🔓 '
  diceLock3.innerHTML = ' 🔓 '
  diceLock4.innerHTML = ' 🔓 '
  diceLock5.innerHTML = ' 🔓 '
  diceLock1.style.display = 'none'
  diceLock2.style.display = 'none'
  diceLock3.style.display = 'none'
  diceLock4.style.display = 'none'
  diceLock5.style.display = 'none'
  diceOne.style.display = 'none'
  diceTwo.style.display = 'none'
  diceThree.style.display = 'none'
  diceFour.style.display = 'none'
  diceFive.style.display = 'none'
}

function checkForTopBonus () {
  if (playerOneBonus.length === 6 && oneBonusApplied === false) {
    player1bonus = playerOneBonus.reduce((x,y) => {
      return x + y
    })
    if (player1bonus >= 63) {
      recordScoreBonus.innerHTML = '35'
      playerOneScore.push(35)
    } else if (player1bonus < 63) {
      recordScoreBonus.innerHTML = '0'
      playerOneScore.push(parseInt(0))
   }
   oneBonusApplied = true
  }
  if (playerTwoBonus.length === 6 && twoBonusApplied === false) {
    player2bonus = playerTwoBonus.reduce((x,y) => {
      return x + y
    })
    if ( player2bonus >= 63) {
      recordScoreBonus.innerHTML = '35'
      playerTwoScore.push(35)
    } else if (player2bonus < 63) {
      recordScoreBonus.innerHTML = '0'
      playerTwoScore.push(parseInt(0))
    }
    twoBonusApplied = true
  }
  if (playerThreeBonus.length === 6 && threeBonusApplied === false) {
    player3bonus = playerThreeBonus.reduce((x,y) => {
      return x + y
    })
    if (player3bonus >= 63) {
      recordScoreBonus.innerHTML = '35'
      playerThreeScore.push(35)
    } else if (player3bonus < 63) {
      recordScoreBonus.innerHTML = '0'
      playerThreeScore.push(parseInt(0))
    }
    threeBonusApplied = true
  }
  if (playerFourBonus.length === 6 && fourBonusApplied === false) {
    player4bonus = playerFourBonus.reduce((x,y) => {
      return x + y
    })
    if (player4bonus >= 63) {
      recordScoreBonus.innerHTML = '35'
      playerFourScore.push(35)
    } else if (player4bonus < 63) {
      recordScoreBonus.innerHTML = '0'
      playerFourScore.push(parseInt(0))
    }
    fourBonusApplied = true
  }
  if (playerFiveBonus.length === 6 && fiveBonusApplied === false) {
    player5bonus = playerFiveBonus.reduce((x,y) => {
      return x + y
    })
    if (player5bonus >= 63) {
      recordScoreBonus.innerHTML = '35'
      playerFiveScore.push(35)
    } else if (player5bonus < 63) {
      recordScoreBonus.innerHTML = '0'
      playerFiveScore.push(parseInt(0))
    }
    fiveBonusApplied = true
  } 
  if (playerSixBonus.length === 6 && sixBonusApplied === false) {
    player6bonus = playerSixBonus.reduce((x,y) => {
      return x + y
    })
    if (player6bonus >= 63) {
      recordScoreBonus.innerHTML = '35'
      playerSixScore.push(35)
    } else if (player6bonus < 63) {
      recordScoreBonus.innerHTML = '0'
      playerSixScore.push(parseInt(0))
    }
    sixBonusApplied = true
  }
}

function getFinalScore () {
  if (playerOneScore.length >= 14) {
    playerOneTotal = playerOneScore.reduce((x,y) => {
      return x + y
    })
    if (playerOneYahtBonus.length === 0) {
      playerOneFinal = playerOneTotal
      recordScoreFinal.innerHTML = playerOneTotal
    } else if (playerOneYahtBonus.length >= 1) {
      score = 0
      for (let i=0; i < playerOneYahtBonus.length; i++) {
        score = score + playerOneYahtBonus[i]
      }
      playerOneFinal = playerOneTotal + score
      recordScoreFinal.innerHTML = playerOneFinal
    }
    finalScores.player1 = playerOneFinal
  } 
  if (playerTwoScore.length >= 14) {
    playerTwoTotal = playerTwoScore.reduce((x,y) => {
      return x + y
    })
    if (playerTwoYahtBonus.length === 0) {
      playerTwoFinal = playerTwoTotal
      recordScoreFinal.innerHTML = playerTwoTotal
    } else if (playerTwoYahtBonus.length >= 1) {
      score = 0
      for (let i=0; i < playerTwoYahtBonus.length; i++) {
        score = score + playerTwoYahtBonus[i]
      }
      playerTwoFinal = playerTwoTotal + score
      recordScoreFinal.innerHTML = playerTwoFinal
    }
    finalScores.player2 = playerTwoFinal
  }
  if (playerThreeScore.length >= 14) {
    playerThreeTotal = playerThreeScore.reduce((x,y) => {
      return x + y
    })
    if (playerThreeYahtBonus.length === 0) {
      playerThreeFinal = playerThreeTotal
      recordScoreFinal.innerHTML = playerThreeTotal
    } else if (playerThreeYahtBonus.length >= 1) {
      score = 0
      for (let i=0; i < playerThreeYahtBonus.length; i++) {
        score = score + playerThreeYahtBonus[i]
      }
      playerThreeFinal = playerThreeTotal + score
      recordScoreFinal.innerHTML = playerThreeFinal
    }
    finalScores.player3 = playerThreeFinal
  }  
  if (playerFourScore.length >= 14) {
    playerFourTotal = playerFourScore.reduce((x,y) => {
      return x + y
    })
    if (playerFourYahtBonus.length === 0) {
      playerFourFinal = playerFourTotal
      recordScoreFinal.innerHTML = playerFourTotal
    } else if (playerFourYahtBonus.length >= 1) {
      score = 0
      for (let i=0; i < playerFourYahtBonus.length; i++) {
        score = score + playerFourYahtBonus[i]
      }
      playerFourFinal = playerFourTotal + score
      recordScoreFinal.innerHTML = playerFourFinal
    }
    finalScores.player4 = playerFourFinal
  } 
  if (playerFiveScore.length >= 14) {
    playerFiveTotal = playerFiveScore.reduce((x,y) => {
      return x + y
    })
    if (playerFiveYahtBonus.length === 0) {
      playerFiveFinal = playerFiveTotal
      recordScoreFinal.innerHTML = playerFiveTotal
    } else if (playerFiveYahtBonus.length >= 1) {
      score = 0
      for (let i=0; i < playerFiveYahtBonus.length; i++) {
        score = score + playerFiveYahtBonus[i]
      }
      playerFiveFinal = playerFiveTotal + score
      recordScoreFinal.innerHTML = playerFiveFinal
    }
    finalScores.player5 = playerFiveFinal
  } 
  if (playerSixScore.length >= 14) {
    playerSixTotal = playerSixScore.reduce((x,y) => {
      return x + y
    })
    if (playerSixYahtBonus.length === 0) {
      playerSixFinal = playerSixTotal
      recordScoreFinal.innerHTML = playerSixTotal
    } else if (playerSixYahtBonus.length >= 1) {
      score = 0
      for (let i=0; i < playerSixYahtBonus.length; i++) {
        score = score + playerSixYahtBonus[i]
      }
      playerSixFinal = playerSixTotal + score
      recordScoreFinal.innerHTML = playerSixFinal
    }
    finalScores.player6 = playerSixFinal
  } 
  getWinner()
}

function getWinner () {
  let finalScoresSort = Object.keys(finalScores).sort(function(x,y) {
    return finalScores[y]-finalScores[x]
  })
  winner = finalScoresSort[0]
  if (winner === 'player1') {
    winningPlayer = allPlayers[0]
  } else if (winner === 'player2') {
    winningPlayer = allPlayers[1]
  } else if (winner === 'player3') {
    winningPlayer = allPlayers[2]
  } else if (winner === 'player4') {
    winningPlayer = allPlayers[3]
  } else if (winner === 'player5') {
    winningPlayer = allPlayers[4]
  } else if (winner === 'player6') {
    winningPlayer = allPlayers[5]
  } 
}

function gameOver () {
  if (allPlayers.length === 1) {
    if (playerOneScore.length === 14) {
        gameMsg.innerHTML = ''
        nextUpMsg.innerHTML = "Game over! You're final score is " + playerOneFinal + "."
        diceLock1.style.display = 'none'
        diceLock2.style.display = 'none'
        diceLock3.style.display = 'none'
        diceLock4.style.display = 'none'
        diceLock5.style.display = 'none'
        diceOne.style.display = 'none'
        diceTwo.style.display = 'none'
        diceThree.style.display = 'none'
        diceFour.style.display = 'none'
        diceFive.style.display = 'none'
        rollDiceBtn.style.display = 'none'
        resetGameBtn.style.display = 'flex'
      }
  }  
  if (allPlayers.length === 2) {
    if (playerOneScore.length === 14 && playerTwoScore.length === 14) {
      gameMsg.innerHTML = ''
      nextUpMsg.innerHTML = `${winningPlayer} wins!`
      diceLock1.style.display = 'none'
      diceLock2.style.display = 'none'
      diceLock3.style.display = 'none'
      diceLock4.style.display = 'none'
      diceLock5.style.display = 'none'
      diceOne.style.display = 'none'
      diceTwo.style.display = 'none'
      diceThree.style.display = 'none'
      diceFour.style.display = 'none'
      diceFive.style.display = 'none'
      rollDiceBtn.style.display = 'none'
      resetGameBtn.style.display = 'flex'
    }
  }
    
  if (allPlayers.length === 3) {
    if (playerOneScore.length === 14 && playerTwoScore.length === 14 && playerThreeScore.length === 14) {
      gameMsg.innerHTML = ''
      nextUpMsg.innerHTML = `${winningPlayer} wins!`
      diceLock1.style.display = 'none'
      diceLock2.style.display = 'none'
      diceLock3.style.display = 'none'
      diceLock4.style.display = 'none'
      diceLock5.style.display = 'none'
      diceOne.style.display = 'none'
      diceTwo.style.display = 'none'
      diceThree.style.display = 'none'
      diceFour.style.display = 'none'
      diceFive.style.display = 'none'
      rollDiceBtn.style.display = 'none'
      resetGameBtn.style.display = 'flex'
    }
  }  
  if (allPlayers.length === 4) {
    if (playerOneScore.length === 14 && playerTwoScore.length === 14 && playerThreeScore.length === 14 && playerFourScore.length === 14) {
      gameMsg.innerHTML = ''
      nextUpMsg.innerHTML = `${winningPlayer} wins!`
      diceLock1.style.display = 'none'
      diceLock2.style.display = 'none'
      diceLock3.style.display = 'none'
      diceLock4.style.display = 'none'
      diceLock5.style.display = 'none'
      diceOne.style.display = 'none'
      diceTwo.style.display = 'none'
      diceThree.style.display = 'none'
      diceFour.style.display = 'none'
      diceFive.style.display = 'none'
      rollDiceBtn.style.display = 'none'
      resetGameBtn.style.display = 'flex'
    }
  }  
  if (allPlayers.length === 5) {
    if (playerOneScore.length === 14 && playerTwoScore.length === 14 && playerThreeScore.length === 14 && playerFourScore.length === 14 && playerFiveScore.length === 14) {
      gameMsg.innerHTML = ''
      nextUpMsg.innerHTML = `${winningPlayer} wins!`
      diceLock1.style.display = 'none'
      diceLock2.style.display = 'none'
      diceLock3.style.display = 'none'
      diceLock4.style.display = 'none'
      diceLock5.style.display = 'none'
      diceOne.style.display = 'none'
      diceTwo.style.display = 'none'
      diceThree.style.display = 'none'
      diceFour.style.display = 'none'
      diceFive.style.display = 'none'
      rollDiceBtn.style.display = 'none'
      resetGameBtn.style.display = 'flex'
    }
  }  
  if (allPlayers.length === 6) {
    if (playerOneScore.length === 14 && playerTwoScore.length === 14 && playerThreeScore.length === 14 && playerFourScore.length === 14 && playerFiveScore.length === 14 && playerSixScore.length === 14) {
      gameMsg.innerHTML = ''
      nextUpMsg.innerHTML = `${winningPlayer} wins!`
      diceLock1.style.display = 'none'
      diceLock2.style.display = 'none'
      diceLock3.style.display = 'none'
      diceLock4.style.display = 'none'
      diceLock5.style.display = 'none'
      diceOne.style.display = 'none'
      diceTwo.style.display = 'none'
      diceThree.style.display = 'none'
      diceFour.style.display = 'none'
      diceFive.style.display = 'none'
      rollDiceBtn.style.display = 'none'
      resetGameBtn.style.display = 'flex'
    }
  }  
}

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}

checkDarkPref()