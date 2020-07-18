// for of loop example

// Works on strings
const someString = 'string';

for(let char of someString) {
  console.log(char);
}

// Works on arrays
const someArray = [1, 2, 3] 

for(let num of someArray) {
  console.log(num);
}

// ... operator
// spread and rest

// spreading an iterator into an array
const values = [...someValues];

// function call spread
someFunction(...someValues);