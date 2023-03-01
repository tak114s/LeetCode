// https://leetcode.com/problems/excel-sheet-column-number/description/

function titleToNumber(columnTitle: string): number {
  let count = 0
  const charCodeBase = 'A'.charCodeAt(0) - 1

  for(let i = columnTitle.length - 1; i >= 0; i--) {
    const char = columnTitle[columnTitle.length - i - 1]
    const charCode = char.charCodeAt(0) - charCodeBase
    count += Math.pow(26, i) * charCode
  }

  return count
}
