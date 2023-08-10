// module.exports = function check(str, bracketsConfig) {
//   your solution
// }

module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMatch = {};

  for (const [open, close] of bracketsConfig) {
    bracketsMatch[close] = open;
  }

  for (const char of str) {
    if (char in bracketsMatch) {
      if (stack.length === 0 || stack[stack.length - 1] !== bracketsMatch[char]) {
        stack.push(char);
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

