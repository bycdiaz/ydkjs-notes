// functions have execution context, which influences what they can access
// This ability is exposed through the this keyword.

// Scope is static and contains a fixed set of variables available at the
// moment and location you define a function, but a function's execution
// context is dynamic, entirely dependent on how it is called

function classroom(teacher) {
  return function study() {
    console.log(
      `${ teacher } says to study ${ this.topic }`
    );
  };
}

const assignment = classroom("Kyle");

assignment();
// Kyle says to study undefined

const homework = {
  topic: "JS",
  assignment: assignment
};

homework.assignment();

const otherHomework = {
  topic: "Math"
};

assignment.call(otherHomework);
// Kyle says to study Math