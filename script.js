// 1.
function maxOfTwoNumbers(x, y) {
  // if (x >= y) {
  //   return x;
  // } else {
  //   return y;
  // }

  // or more "elegantly" using the fantastic ternary expression!
  return  x >= y ? x : y;
}

// console.log(maxOfTwoNumbers(3, 9));

// 2.
const maxOfThree = (num1, num2, num3) => {
  let max = num1
  if(num2 > max) {
    max = num2
  }
  if(num3 > max) {
    max = num3
  }
  return max
}

// console.log(maxOfThree(1100,2000,3))

// 3.
function isCharAVowel(char) {
  const vowels = "aeiouAEIOU"
  for (const vowel of vowels) {
    if (char == vowel) {
      return true
    }
  }
  return false
}

// console.log(isCharAVowel("E"))


// 4.
const sumArray = (myArray) => {
  let sum = myArray[0]
  for (let i = 1; i<= myArray.length - 1; i++) {
    sum += myArray[i]
  }
  return sum
}
// console.log(sumArray([4,3,5]))

// 5.
function multiplyArray(myArray) {
  let prod = myArray[0]
  for (let i = 1; i<= myArray.length - 1; i++) {
    prod *= myArray[i]
  }
  return prod
}
// console.log(multiplyArray([4,3,5]))

// 6.
const reverseString = (myString) => {
  let s = ''
  for (i = myString.length -1; i >=0; i--) {
    s += myString[i]
  }
  return s
}

// console.log(reverseString("Howdy"))
