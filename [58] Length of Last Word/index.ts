// https://leetcode.com/problems/length-of-last-word/description/

function lengthOfLastWord(s: string): number {
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};
