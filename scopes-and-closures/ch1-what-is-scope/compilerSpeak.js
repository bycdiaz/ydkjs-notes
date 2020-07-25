var students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
  for (let student of students) {
      if (student.id == studentID) {
          return student.name;
      }
  }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
// Suzy

// The JS engine will label each occurance of a variable either a target or source.

// targets
// students = [ // ...
// assignments happen when a variable is on the left side of an =, as in the above example
// same as nextStudent = getStudentName(73);

// for (let student of students) {
// also assigns value to student in each iteration of loop

// later half of line 16, getStudentName(73), is also an assignment
// 73 is assigned to parameter of studentID
