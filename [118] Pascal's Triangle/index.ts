// https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows: number): number[][] {
  const rows: number[][] = []
  rows[0] = [1]
  if(numRows === 1) return rows

  for(let i = 1; i < numRows; i++) {
    const prevRow = rows[i - 1]
    rows[i] = [...prevRow, 1]

    for(let j = 1; j < i; j++) {
      rows[i][j] = prevRow[j - 1] + prevRow[j]
    }
  }

  return rows
};
