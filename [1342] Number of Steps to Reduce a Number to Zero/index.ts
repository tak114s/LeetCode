// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

function numberOfSteps(num: number): number {
  let count = 0;
  while (num > 0) {
    num % 2 === 0 ? num /= 2 : num -= 1
    count++
  }
  return count;
}
