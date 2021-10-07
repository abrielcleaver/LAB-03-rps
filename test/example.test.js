// IMPORT MODULES under test here:

// import { example } from '../example.js';

import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('Draw - userChoice === computerThrow', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual,expected);
});    

