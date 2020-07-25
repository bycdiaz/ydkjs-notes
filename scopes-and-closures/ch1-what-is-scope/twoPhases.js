// Processing happens in two phases: parsing/compilation then execution.
// Three program characteristics that prove compilation happens before execution:
// syntax errors, early errors, and hoisting.


// Syntax Errors from the Start
// sample program:
// var greeting = "Hello";
// console.log(greeting);

// greeting = ."Hi";
// Throws syntax error is thrown despite code above greeting reassignment being
// syntactically correct. If JS was executing top-down and line by line, "Hello"
//  would print before syntax error is thrown.


// Early errors
// sample program:
// console.log("Howdy");
// Howdy is not printed because of syntax error on line 24

// saySomething("Hello", "Hi");

// function saySomething(greeting, greeting) {
//   // use strict does not allow parameters to have the same name
//   "use strict";
//   console.log(greeting);
// }