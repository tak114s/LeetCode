// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const output: boolean[] = []
  const max = Math.max(...candies)
  for(let i = 0; i < candies.length; i++) {
    output[i] = candies[i] + extraCandies >= max ? true : false
  }
  return output
};
