// Defining an object linkage
const homework = {
  topic: "JS"
};

const otherHomework = Object.create(homework);

console.log(homework.topic);
// prints "JS"

console.log(otherHomework.topic);
// prints "JS"

otherHomework.topic = "Math"
console.log(otherHomework.topic);
// prints "Math"

console.log(homework.topic);
// prints "JS"