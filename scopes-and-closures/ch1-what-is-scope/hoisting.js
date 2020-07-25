function saySomething() {
  var greeting = "Hello";
  {
      greeting = "Howdy";  // error comes from here
      let greeting = "Hi";
      console.log(greeting);
  }
}

// hoisting, in the above example, is the greeting variable declaration being moved to 
// the top of the block that starts on line 3. This is how the program knows that the
// reassignment on line 4 happened too early.

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization

// JS engine could only know that the reassignment to greeting on line 4 was too early
// if it processed code before execution. This conflict is called the Temporal Dead Zone,
// which is explained at length later.