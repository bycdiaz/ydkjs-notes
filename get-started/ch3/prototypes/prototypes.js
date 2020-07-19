const homework = {
  topic: "JS"
};

// toString() on homework object does not throw an error because upon seeing that homework
// does not have this method, it looks up the prototype chain to  find that Object.prototype
// does have a toString() method. Delegation invokes Object.prototype.toString() instead.
console.log(homework.toString());
// prints [object Object]