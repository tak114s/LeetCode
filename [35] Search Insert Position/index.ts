// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums: number[], target: number): number {
  if(nums.indexOf(target) !== -1) return nums.indexOf(target)

  nums.push(target)
  nums.sort((x, y) => x - y)
  return nums.indexOf(target)
};
