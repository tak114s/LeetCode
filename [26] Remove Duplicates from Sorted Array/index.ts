// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number[] {
  let arr = [nums[0]]

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i - 1]) {
      arr.push(nums[i])
    }
  }

  return arr
};
