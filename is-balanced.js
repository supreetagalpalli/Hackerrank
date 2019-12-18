function isBalanced(s) {
  let res = 'YES';
  let stack = [];
  s.split('').forEach(value => {
    switch (value) {
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      case '(':
        stack.push(')');
        break;
      default:
        let temp = stack.pop();
        if (value !== temp) res = 'NO';
    }
  });
  if (stack.length) res = 'NO';
  return res;
}
