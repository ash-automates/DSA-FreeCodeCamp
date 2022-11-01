const Stack = require("../stackClass");

const checkPalindromes = function (word) {
  let reversed = "";
  const stack = new Stack();
  for (let index = 0; index < word.length; index++) {
    stack.push(word[index]);
  }
  for (let index = stack.size(); index > 0; index--) {
    reversed += stack.pop();
  }
  if (word === reversed) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPalindromes("bob"));
