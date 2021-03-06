'use strict';

console.log('APP EXISTS');

//parse command line arguments
// console.log(process.argv.slice(2));

/* 
- Requires the library files you will be writing (input, notes)
- Instantiates an “Input” parser
- Sends properly parsed input to the Notes library for display
*/


const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsed = new Input(process.argv.slice(2));
let notes = new Notes(parsed);
