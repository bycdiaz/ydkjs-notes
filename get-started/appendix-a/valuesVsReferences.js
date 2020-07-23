// variables hold copies to values.
// explains why yourName results in Kyle, despite the reassignment to myName on line 7.
// let myName = "Kyle";

// let yourName = myName;

// myName = "Frank";

// console.log(myName);
// Frank

// console.log(yourName);
// Kyle

// references is the idea that two or more  variables point at the same value.

const myAddress = {
  street: "123 JS Blvd",
  city: "Austin",
  state: "TX"
}

const yourAddress = myAddress;

myAddress.street = "456 TS Ave";

console.log(yourAddress.street);