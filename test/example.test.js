import { didUserWin } from '../utils.js';

const test = QUnit.test;

test ('Draw - userChoice === computerThrow', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual,expected); 
});    

test ('win - userChoice-rock v computerThrow-scissors', (expect) =>{
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual,expected); 
});

test ('win - userChoice-paper v computerThrow-rock', (expect) =>{
    const expected = 'win';
    const actual = didUserWin('paper','rock');
    expect.equal(actual,expected); 
});

test ('win - userChoice-scissors v computerThrow-paper', (expect) =>{
    const expected = 'win'; 
    const actual = didUserWin('scissors','paper'); 
    expect.equal(actual,expected); 
});

test ('lost', (expect) =>{
    const expected = 'lost'; 
    const actual = didUserWin('scissor', 'rock'); 
    expect.equal(actual,expected); 
});