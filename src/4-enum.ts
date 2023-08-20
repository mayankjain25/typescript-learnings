//NUMERIC ENUMS

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const enum Responses {
  No = 0,
  Yes = 1,
}

const enum StudentList {
  Mayank = 1,
  Parth,
  Aradhya,
  Ayush,
  Swati,
}

let studentName: StudentList = StudentList.Mayank;
console.log(studentName);

//STRING ENUMS

const enum StudentDetails {
  Name = "Mayank",
  Age = "23",
  Cities = "Kolkata, Bangalore, Bhubaneswar, Delhi, Gangtok, Darjeeling, Puri, Nashik, Aurangabad, Parasnath",
}

let studentName1: StudentDetails = StudentDetails.Name;
let studentAge: StudentDetails = StudentDetails.Age;
console.log(studentName1, studentAge);

//HETEROGENEOUS ENUMS - A mixture of string and numeric enums

const enum StudentDatabase {
  ID = 1,
  Name = "Mayank",
  Age = 23,
}

let studentDatabaseName: StudentDatabase = StudentDatabase.Name;
let studentDatabaseAge: StudentDatabase = StudentDatabase.Age;

console.log(studentDatabaseName, studentDatabaseAge);
