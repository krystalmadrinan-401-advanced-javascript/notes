'use strict';

// importing the input
const Input = require('../lib/input.js');


// writing the test: describe, it, expect
// test wants to check good vs. bad input 


// BAD INPUT:

// No data entered in command line (null)
const badInputA = [];

// Wrong input format in command line (no flag and/or data)
const badInputB = ['wrong input'];

// Wrong flag entered in command line
const badInputC = ['-e', 'string'];

// Data is not a string note: number works and gets turned into string
const badInputD = ['-a', ''];


// GOOD INPUT:

// Command line input is correct: '-a' with s a string
const goodInput = ['-a', 'good input'];



// BAD INPUT TEST
describe('module handles bad input', () => {
    it('handles null', () => {
        let result = new Input(badInputA);
        expect(result.valid()).toBeFalsy();
    })

    it('handles wrong input format', () => {
        let result = new Input(badInputB);
        expect(result.valid()).toBeFalsy();
    })

    it('handles wrong flag ', () => {
        let result = new Input(badInputC);
        expect(result.valid()).toBeFalsy();
    })

    it('handles wrong data type', () => {
        let result = new Input(badInputD);
        expect(result.valid()).toBeFalsy();
    })
})


// GOOD INPUT TEST
describe('module handles good input', () => {
    it('handles good input for -a', () => {
        let result = new Input(goodInput);
        expect(result.valid()).toBeTruthy();
    })
})

