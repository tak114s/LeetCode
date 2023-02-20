// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number | void {
  nums.sort()
  for(let i = 0; i < nums.length; i += 2) {
    if(nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
};
