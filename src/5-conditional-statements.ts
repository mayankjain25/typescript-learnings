let num1: number = 10;
let num2: number = 20;
let num3: number = 5;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}

if (num1 > num3) {
  console.log(`${num1} is greater than ${num3}`);
} else {
  console.log(`${num3} is greater than ${num1}`);
}

num1 > num2
  ? console.log(`${num1} is greater than ${num2}`)
  : console.log(`${num2} is greater than ${num1}`);

num1 > num3
  ? console.log(`${num1} is greater than ${num3}`)
  : console.log(`${num3} is greater than ${num1}`);
