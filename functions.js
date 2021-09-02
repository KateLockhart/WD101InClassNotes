//* Function Notes :
// Created  8/28/21

/*
Types of Functions:
- function declaration
- function expression
- anonymous function
*/

declaration();

// Function declaration: are hoisted, run when we call them(invoke)
function declaration() {
    console.log("I'm a Function Declaration.");
}

//expression(); <--errors out 

//Function expression: are NOT hoisted and are stored in a variable
// We use the variable name to run the function
let expression = function() { // <-- an example of an anonymous function
    console.log("I'm a Function Expression!");
}

expression();

// Function Declaration as well
function myName(name) {
    console.log(`My name is ${name}`);
}

myName("Kate");