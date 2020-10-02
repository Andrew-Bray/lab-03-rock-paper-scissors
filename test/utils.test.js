// IMPORT MODULES under test here:
import { didUserWin, getRandomThrow } from '../utils.js';

const test = QUnit.test;

test('test should randomly deliver rock, paper, or scissors', (expect) => {

    const actual = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});

test('paper beats rock should give a win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'paper';
    const two = 'rock';
    const expected = 'win';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('rock beats scissors should give a win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'rock';
    const two = 'scissors';
    const expected = 'win';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('scissors beats paper should give a win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'scissors';
    const two = 'paper';
    const expected = 'win';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('paper loses to scissors should give a loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'paper';
    const two = 'scissors';
    const expected = 'lose';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('scissors loses to rock should give a loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'scissors';
    const two = 'rock';
    const expected = 'lose';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('rock loses to paper should give a loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'rock';
    const two = 'paper';
    const expected = 'lose';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('paper and paper should give a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const one = 'paper';
    const two = 'paper';
    const expected = 'draw';
    

    const actual = didUserWin(one, two);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
