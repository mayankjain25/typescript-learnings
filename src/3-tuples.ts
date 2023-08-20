//Tuples - It is a fixed length array. Once the length of the array is defined, it cannot be changed. Tuples are only available in typescript. Once written, it is compiled to a regular array in JavaScript.

const tupleExample1: [string, number, number] = ["CSS Course", 2019, 15000]; // this tuple can only have three values, where the first value will be a string ,and the next two values will be a number

// const tupleExample2: [string, number] = [12, "Hello"] //This is also a tuple, however this will generate an error as the first value is a number and the second value is a string. The order of the values in a tuple is important.

// const tupleExample3: [string, number] = ["Hello", 12, 13] //This is also a tuple, however this will generate an error as the tuple can only have two values, but here we have three values.

// type inference in case of a tuple
const tupleExample2 = ["Hello", 12, 13]; //This is also a tuple, however we have not specified the type of the tuple. Typescript will automatically infer the type of the tuple based on the values that we have provided. The type infered is (string | number)[] instead of [string, number, number]
