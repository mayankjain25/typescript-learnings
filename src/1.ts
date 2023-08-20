let score: number = 95; //this makes sure that the 'score' variable will always store a number
let score2 = 95; //this is JS. There is no type declaration for score2, hence score2 can be reinitalized to some other data type as well

function addNum(a: number, b: number): number {
  return a + b;
}

addNum(1, 2); //this will work

// addNum(1, "2"); //this will throw an error as the function expects a number and not a string

let user = {
  name: "Mayank",
  age: "26",
};
