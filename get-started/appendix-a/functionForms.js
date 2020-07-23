// anonymous function expression is assigned to the awesomeFunction variable.
// In ES6, the name property on functions performs a "name inference" on the anonymous function
const awesomeFunction = function(coolThings) {
  // ..
  return amazingStuff;
};

// name property reveals given name or inferred name if an anonymous function
console.log(awesomeFunction.name);
// "awesomeFunction"
// usefule when using devtools to inspect values or observing the error stack trace.

// Note: above only happens if a function expression is assigned to a variable with =
// Name will not be inferred if function expression is passed in as an argument to a
// function call.

const anotherAwesomeFunction = function someName(coolThings) {
  // ..
  return amazingStuff;
};

// someName takes precedence over anotherAwesomeFunction
console.log(anotherAwesomeFunction.name);
// "someName"

// naming a function expression, like with someName, is useful for readers so that they can
// infer the intent of the function expression vs having to read the function contents.

// other function declaration forms:

// generator function declaration
function *two() { .. }

// async function declaration
async function three() { .. }

// async generator function declaration
async function *four() { .. }

// named function export declaration (ES6 modules)
export function five() { .. }

// IIFE
(function(){ .. })();
(function namedIIFE(){ .. })();

// asynchronous IIFE
(async function(){ .. })();
(async function namedAIIFE(){ .. })();

// arrow function expressions
// Note: Arrow functions are syntactically anonymous.

var f;
f = () => 42;
f = x => x * 2;
f = (x) => x * 2;
f = (x,y) => x * y;
f = x => ({ x: x * 2 });
f = x => { return x * 2; };
f = async x => {
    var y = await doSomethingAsync(x);
    return y * 2;
};
someOperation( x => x * 2 );
// ..

// functions can be specified in class and object literal definitions
class SomethingKindaGreat {
  // class methods
  coolMethod() { .. }   // no commas!
  boringMethod() { .. }
}

var EntirelyDifferent = {
  // object methods
  coolMethod() { .. },   // commas!
  boringMethod() { .. },

  // (anonymous) function expression property
  oldSchool: function() { .. }
};