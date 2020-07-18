// strings, arrays, maps, sets are iterables

// an array is an iterable
const arr = [ 10, 20, 30 ];

for (let val of arr) {
  console.log(`Array value: ${ val }`);
}
// Array value: 10
// Array value: 20
// Array value: 30

// creating a shallow copy of an array
const arrCopy = [...arr];

// strings can be iterable
const greeting = "Hello world!";
const chars = [ ...greeting ];

console.log(chars);
// [ "H", "e", "l", "l", "o", " ",
//   "w", "o", "r", "l", "d", "!" ]

// maps are iterable. Example:
// given two DOM elements, `btn1` and `btn2`
var buttonNames = new Map();
buttonNames.set(btn1,"Button 1");
buttonNames.set(btn2,"Button 2");

for (let [btn,btnName] of buttonNames) {
    btn.addEventListener("click",function onClick(){
        console.log(`Clicked ${ btnName }`);
    });
}

// if we want to consume only the values of the above buttonNames map,
// we can call values() to get a values-only iterator:

for (let btnName of buttonNames.values()) {
    console.log(btnName);
}
// Button 1
// Button 2

// if we want the index and value in an array iteration, we can make an 
// entries iterator with the entries() method:

const arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}
// [0]: 10
// [1]: 20
// [2]: 30

// For the most part, all built-in iterables in JS have three iterator forms available:
// keys-only (keys()), values-only (values()), and entries (entries()).