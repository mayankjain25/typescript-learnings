let coursePrice: number = 19.99;
let courseName: string = "React";
let passed: boolean = true;

let password; //since no type is specified nor it has been initialised, it currently has 'any' type. DO NOT specify variables with type = any

let arrayOfNumbers: number[] = [1, 2, 3, 4, 5]; //this is a number array. The array can only contain numbers. If you try to add a string, it will throw an error.
let arrayOfStrings: string[] = ["a", "b", "c"]; //this is a string array. The array can only contain strings. If you try to add a number, it will throw an error.
let arrayOfBooleans: boolean[] = [true, false, true]; //this is a boolean array. The array can only contain booleans. If you try to add a string or a number, it will throw an error.

let arrayOfAny: any[] = [1, "a", true]; //this is an array of any type. The array can contain any type of data. This is not recommended as it defeats the purpose of using typescript.

let mixedArray: (string | number)[] = ["hi", 2006553, "hello"];
//this is a mixed array. The array can contain both strings and numbers. If you try to add a boolean, it will throw an error.

let mixedArray2: (string | number | boolean)[] = ["hi", 2006553, "hello", true];
//this is a mixed array. The array can contain strings, numbers and booleans. If you try to add an object, it will throw an error.

//nested number type array
let nestedNumberArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//nested string type array
let nestedStringArray: string[][] = [["Hi"], ["Hello", "Worlds"]];

//nested array of string and numbers
let nestedStringAndNumbersArray: (string | number)[][] = [
  [1, 2, 3, 4],
  ["a", "b", "c", "d"],
  [1, "q"],
];

//Tuples - It is a fixed length array. Once the length of the array is defined, it cannot be changed. Tuples are only available in typescript. Once written, it is compiled to a regular array in JavaScript.

const tupleExample: [string, number, number] = ["CSS Course", 2019, 15000]; // this tuple can only have three values, where the first value will be a string ,and the next two values will be a number

// const tupleExample2: [string, number] = [12, "Hello"] //This is also a tuple, however this will generate an error as the first value is a number and the second value is a string. The order of the values in a tuple is important.

// const tupleExample3: [string, number] = ["Hello", 12, 13] //This is also a tuple, however this will generate an error as the tuple can only have two values, but here we have three values.

// type inference in case of a tuple
const tupleExample4 = ["Hello", 12, 13]; //This is also a tuple, however we have not specified the type of the tuple. Typescript will automatically infer the type of the tuple based on the values that we have provided. The type infered is (string | number)[] instead of [string, number, number]
