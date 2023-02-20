// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
  const result: number[] = []
  for(let i = 0; i < nums.length; i++) {
    result[i] = i === 0 ? nums[i] : nums[i] + result[i - 1]
  }
  return result
}
