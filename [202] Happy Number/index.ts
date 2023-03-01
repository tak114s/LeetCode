// https://leetcode.com/problems/happy-number/description/

function isHappy(n: number): boolean {
  if (n === 1) return true;
  if (n < 0) return false;

  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; i++) {
      n += Math.pow(Number(s[i]), 2);
    }
    if (n === 1) return true;
  }

  return false;
}
