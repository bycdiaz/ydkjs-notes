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

// in for (let student of students)
// student is the target. students is the source

// in if (student.id == studentID), student and studentID are source references.
// student is also a source reference n return student.name

// In getStudentName(73), getStudentName is a source reference. 