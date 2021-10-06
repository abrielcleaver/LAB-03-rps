// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  import { didUserWin, getRandomThrow } from "./utils.js";
  
  const playButton = document.getElementById('play');
  const winSpan = document.getElementById('win');
  const lostSpan = document.getElementById('lost');
  const drawSpan = document.getElementById('draw');
  const result = document.getElementById('result');

  let win = 0;
  let lost = 0;
  let draw = 0;

  playButton.addEventListener('click', () => {
  // console.log('click')
  
  const selected = document.querySelector('input[type=radio]:checked');
  if(!selected){
    return error.classList.remove('hidden');
  }
  error.classList.add('hidden');
  const userChoice = selected.value;
  const computerThrow = getRandomThrow();

  if (userChoice === computerThrow){
    draw++;
  }
  if (didUserWin(userChoice, computerThrow)){
    win++;
    result.textContent = 'You Won! It was ${computerThrow}';
  } else {
    lost++;
    result.textContent = 'You Lost! It was ${computerThrow}'; 
  }

// if the userChoice === computerThrow return 'draw'
// if the user throws rock && computer throws scissors, return 'win'
// else if the user throws paper && computer throws rock, return 'win'
// else if the user throws scissors && computer throws paper, return 'win'
// else return 'lose'

  winSpan.textContent = win;
  lostSpan.textContent = lost;
  drawSpan.textContent = draw; 
  })
