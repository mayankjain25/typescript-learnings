for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

let nums: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i: number = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//using for-of loop in JS/TS

let mixData: (string | number)[] = ["Cosmos", 13, 50, "Star"];

for (let item of mixData) {
  console.log(item);
}

for (let item of mixData.entries()) {
  console.log(item);
  console.log(item[0], item[1]);
  //This returns a pair of index as well as the value.
  // For instance, the above would output:
  // [0, "Cosmos"],
  // [1, 13],
  // [2, 50],
  // [3, "Star"]

  //To access the index, we could do item[0], and to access the values, we could do item[1]; SIMPLE!
}

//We can also use destructuring to do the same task

for (let [i, item] of mixData.entries()) {
  console.log(i, item);
}

//Note: For arrays, destructuring involves the [] brackets, while for objects, it uses the {} brackets
