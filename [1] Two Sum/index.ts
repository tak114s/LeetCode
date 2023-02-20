// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] | void {
  const hashTable: any = {}

  for(let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i
  }

  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if(hashTable.hasOwnProperty(diff) && hashTable[diff] !== i) {
      return [i, hashTable[diff]]
    }
  }
}
