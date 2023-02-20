// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number | void {
  const m = new Map()

  for(const num of nums) {
    const prev = m.get(num)
    m.set(num, prev ? prev + 1 : 1)
  }

  for(let [key, value] of m) {
    if(value > Math.floor(nums.length / 2)) {
      return key
    }
  }
};
