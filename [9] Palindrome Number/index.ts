// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
  if( x < 0 ) return false

  const st = String(x)
  const rev = st.split('').reverse().join('')

  return st === rev
};
