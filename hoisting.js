//* Hoisting Notes :
// Created  8/26/21

/*
Two General Phase when we run code:
- Creation Phase
    Any variable (let, var, const) and function in our code are stored to memory.
- Execution Phase:
    Values are assigned to the variable and functions that were stored to memory during the create phase

The left of the assignment operator (=) is stored to memory, right side is assigned during execution
*/

/*
(   create  ) (execute)
let variable = value;
*/

// 1. 'num' has been hoisted - JS recognized our variable, it knows it exists
// 2. Js reads top to bottom, when we called our console.log first, it doesn't get the value of 'num"
// console.log(num);
// let num = 12;

sayHi();

function sayHi() {
    console.log('Hello');
    let hi = 'Hola';
    console.log(hi);
}

//varFunc();

let varFunc = function() {
    console.log('Anything');
}

varFunc();