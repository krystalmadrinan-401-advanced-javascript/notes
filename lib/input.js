'use strict';

const minimist = require('minimist');

/*
- Exports a constructor function
- Uses minimist (or any other CLI library) to read command line arguments
- Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
- Returns an instance (object) containing the action to perform and the payload for the action
- For example:

 {
    action: "add";
    payload: "This is a really cool thing that I wanted to remember for later"
  }

*/




// function a does a thing

// a.valid() telling us if thing was valid

// Exporting a's constructor has access to:
// a.command = { action: "add", payload: "string" }
// a.valid() function tells us if a.command makes sense 



// Exporting a constructor function

function Input(args) {
    let formatted = minimist(args);
    console.log(formatted);
    this.command = {};
}

Input.prototype.valid = function () {};


module.exports = Input;