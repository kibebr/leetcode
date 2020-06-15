/*
  Write a program that outputs the string representation of numbers from 1 to n.
  But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = function (n) {
  const arr = new Array(n)

  for (let i = 0; i < n; ++i) {
    let isMultipleOf3 = false
    let isMultipleOf5 = false

    if ((i + 1) % 3 === 0) {
      arr[i] = 'Fizz'
      isMultipleOf3 = true
    }

    if ((i + 1) % 5 === 0) {
      arr[i] = (isMultipleOf3) ? 'FizzBuzz' : 'Buzz'
      isMultipleOf5 = true
    }

    if (!isMultipleOf3 && !isMultipleOf5) {
      arr[i] = String(i+1)
    }
  }

  return arr
}
