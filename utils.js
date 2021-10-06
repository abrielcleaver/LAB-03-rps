export function didUserWin(userChoice, computerThrow){
    return userChoice === computerThrow;
}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}