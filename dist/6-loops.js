"use strict";
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
let mixData = ["Cosmos", 13, 50, "Star"];
for (let item of mixData) {
    console.log(item);
}
for (let item of mixData.entries()) {
    console.log(item);
    console.log(item[0], item[1]);
}
for (let [i, item] of mixData.entries()) {
    console.log(i, item);
}
