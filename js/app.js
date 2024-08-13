/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// our global state object
let state = {
    boredem: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer, gameOver; // this will assign the timer & gameOver a value of undefined


/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#bordeom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector('#play')
const feedBtnEl = document.querySelector('#feed')
const sleepBtnEl = document.querySelector('#sleep')

const gameMessageEl = document.querySelector('message')
const resetBtnEl = document.querySelector('restart')

console.log({
    boredomStatEl, 
    hungerStatEl,
    sleepinessStatEl,
    playBtnEl,
    feedBtnEl,
    sleepBtnEl,
    resetBtnEl})
/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


