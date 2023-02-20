// https://leetcode.com/problems/create-target-array-in-the-given-order/

function createTargetArray(nums: number[], index: number[]): number[] {
  const target: number[] = []
  for(let i = 0; i < index.length; i++) {
    target.splice(index[i], 0, nums[i])
  }
  return target
}
