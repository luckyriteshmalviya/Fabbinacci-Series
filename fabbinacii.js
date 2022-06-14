// Output => 0,1,1,2,3,5,8..........<=100

/**
 * Step -01  Create a function with two parameters - arr & k.
 * Step -1.1 Now Create a loop
 * Step -1.2 The last digit of loop should be less then or equals to k.
 * Step -02  Check the condition if the current value is not equals to 0.
 * Step -03  Create a let variable named as newarr which is sum of last two values of array inside the If condition.
 * Step -04  Push the new number in the series.
 * Step -05  Check if the last number is exceeding the k then remove that value from arr
 * Step -06  return the arr.
 */

//  First Approach
function fabbinacci(arr, k) {
  for (let i = 0; arr[i] <= k; i++) {
    if (arr[i] !== 0) {
      const newarr = arr[i] + arr[i - 1];
      arr.push(newarr);
    }
  }
  if (arr[arr.length - 1] > k) {
    arr.pop(arr.length - 1);
  }
  return arr;
}
let arr = [0, 1];
console.log(fabbinacci(arr, 144));

//  Second Approach
// let p = 0;
// let c = 1;
// while (p < 100) {
//   console.log(p); // 0,1
//   let n = p + c; // 1
//   p = c; // p=1
//   c = n; // 1 + 1
// }
