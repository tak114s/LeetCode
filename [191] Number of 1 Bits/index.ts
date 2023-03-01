// https://leetcode.com/problems/number-of-1-bits/description/

function hammingWeight(n: number): number {
  const char = n.toString(2)
  let count = 0

  for(let i = 0; i < char.length; i++) {
    if(char.charAt(i) === '1') {
      count++
    }
  }

  return count
};
