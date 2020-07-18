// Closure is when a function remembers and continues to access 
// variables from outside its scope, even when the function is
// executed in a different scope.

// Example:
// function greeting(msg) {
//   return function who(name) {
//     console.log(`${ msg }, ${ name }!`);
//   };
// }

// const hello = greeting("Hello");
// const howdy = greeting("Howdy");

// hello("Kyle");
// Hello, Kyle!

// hello("Sarah");
// Hello, Sarah!

// howdy("Grant");
// Howdy, Grant!

// closures can observe and make updates to variables
function counter(step = 1) {
  var count = 0;
  return function increaseCount(){
    count = count + step;
    console.log(count);
    return count;
  };
}

const incBy1 = counter(1);
const incBy3 = counter(3);

incBy1();       // 1
incBy1();       // 2

incBy3();       // 3
incBy3();       // 6
incBy3();       // 9