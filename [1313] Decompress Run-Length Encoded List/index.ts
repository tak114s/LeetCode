// https://leetcode.com/problems/decompress-run-length-encoded-list/

function decompressRLElist(nums: number[]): number[] {
  const target: number[] = []
  for(let i = 0; i < nums.length; i += 2) {
    for(let j = 1; j <= nums[i]; j++) {
      target.push(nums[i + 1])
    }
  }
  return target
}
