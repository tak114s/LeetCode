// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]): void {
  for(let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
};
