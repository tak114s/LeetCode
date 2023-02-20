// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

function findDisappearedNumbers(nums: number[]): number[] {
  return [...Array(nums.length)].map((_, i) => i + 1).filter((num) => {
    return !nums.includes(num)
  })
};
