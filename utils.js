// export function didUserWin(userChoice, computerThrow){
//     return userChoice === computerThrow; 
// }

export function didUserWin(userChoice, computerThrow){
    if (userChoice === computerThrow){
        return 'draw';
    } else if (userChoice === 'rock' && comp === 'scissors'){
        return 'win';
    } else if (userChoice === 'paper' && computerThrow === 'rock'){
        return 'win';
    } else if (userChoice === 'scissors' && computerThrow === 'paper'){
        return 'win';
    } else {
        return 'lost';
    }
}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}