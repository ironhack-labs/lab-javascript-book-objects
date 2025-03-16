// function maxOfTwoNumbers(a, b, c ) {
//     return a > b || b > c ? a : b, c;
// }

// console.log(maxOfTwoNumbers(-7, -55, 2));

function maxOfThreeNumbers(a, b, c) {
  // your code
  let max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

console.log(maxOfThreeNumbers(-7, -55, -3));

function maxOfArray(numbers) {
  // your code
  let maxNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

console.log(maxOfArray([1, 2, 3, 4]));

function longestString(strings) {
  // your code
  let longStr = '';
  for (let i = 0; i < strings.length; i++) {
    if (longStr < strings[i]) {
        longStr = strings[i];
        strings[i]++
    }
    if (longStr.length == strings[i].length) {
       return longStr;
    }
  }
  return longStr;
}
console.log(longestString(['ana', 'ivan', 'jan', 'nick']))

