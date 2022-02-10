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
}

function getPlayer(){
  playerName = playerInput.value;
  if (allPlayers.length === 6) {
    gameMsg.textContent = "Sorry, only 6 players!"
  } else {
    allPlayers.push(playerName) 
    console.log(allPlayers)
  }
  return false
}




/*-------------------------------- Questions --------------------------------*/

//Number player bootstrap dropdown not working?



//write game message instructions to enter name 1 by 1


// Bootstrap lesson code
    // using this as an example to write to CSS based on allPlayers array

// function createScoreboard(evt) {
//   // isTaylor will be either true or false
//   const playerCount = evt.target.id === "swift-button"
//   const newPlayer = {
//     artist: isTaylor ? "T-Swift" : "Yeezy",
//     text: isTaylor ? getRandomTaylorQuote() : getRandomKanyeQuote()
//   }
//   quotes.push(newPlayer)
//   render()
// }

// function render() {
//   playerScoreboard.innerHTML = ""
//   // quotes is an array of quote objects
//   quotes.forEach((playerName, idx) => {
//     // quote is an object with the shape of:
//     // { artist: "artist name", text: "quote" }
//     appendScoreboard(playerName, idx)
//   })
// }

// function appendScoreboard(playerName, idx) {
//   // quote is an object with the shape of:
//   // { artist: "artist name", text: playerName }
//   let players = document.createElement("div")
//   players.classList.add("card", `${playerName.artist.toLowerCase()}`)
//   players.innerHTML =
//   `<div id="name1" class="player player1">Howard</div>
//   <div id="ones1" class="player player${idx}"></div>
//   <div id="twos1" class="player player${idx}"></div>
//   <div id="threes1" class="player player${idx}"></div>
//   <div id="fours1" class="player player${idx}"></div>
//   <div id="fives1" class="player player${idx}"></div>
//   <div id="sixes1" class="player player${idx}"></div>
//   <div id="top-half-bonus1" class="player player${idx}"></div>
//   <div id="three-kind1" class="player player${idx}"></div>
//   <div id="four-kind1" class="player player${idx}"></div>
//   <div id="sm-straight1" class="player player${idx}"></div>
//   <div id="lg-straight1" class="player player${idx}"></div>
//   <div id="yahtzee1" class="player player${idx}"></div>
//   <div id="chance1" class="player player${idx}"></div>
//   <div id="yahtzee-bonus1" class="player player${idx}"></div>
//   <div id="total-score1" class="player player${idx}"></div>`
//   playerScoreboard.appendChild(players)
// }
