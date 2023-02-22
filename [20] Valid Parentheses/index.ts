// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s: string): boolean {
  if(s.length % 2 !== 0) return false

  const stack: string[] = []
  const dictionary = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
  }

  for(let i = 0; i < s.length; i++) {
    const curr = s[i]
    const del = dictionary[curr]

    if(del) {
      if(del === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(curr)
    }
  }

  return !stack.length
};
