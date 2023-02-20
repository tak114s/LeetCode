// https://leetcode.com/problems/minimum-time-visiting-all-points/

function minTimeToVisitAllPoints(points: number[][]): number {
  let time = 0;
  for(let i = 0; i < points.length - 1; i++) {
    const x = Math.abs(points[i + 1][0] - points[i][0])
    const y = Math.abs(points[i + 1][1] - points[i][1])

    const count = Math.max(x, y)
    time += count
  }
  return time;
};
