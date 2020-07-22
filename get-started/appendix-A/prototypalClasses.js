const Classroom = {
  welcome() {
      console.log("Welcome, students!");
  }
};

// mathClass object is linked via prototype to Classroom.
const mathClass = Object.create(Classroom);

// welcome() call is delegated to the method defined in Classroom.
mathClass.welcome();
// Welcome, students!

// prototypal class patter would call the behavior below "inheritance"
function Classroom() {
  // ..
}

Classroom.prototype.welcome = function hello() {
  console.log("Welcome, students!");
};

const mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!

// Class mechanism is preferred since ES6
class Classroom {
  constructor() {
      // ..
  }

  welcome() {
      console.log("Welcome, students!");
  }
}

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!