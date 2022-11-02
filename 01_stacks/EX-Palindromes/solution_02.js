const checkPalindromes = function (word) {
  let wordToArray = [];
  let reversed = "";
  for (let index = 0; index < word.length; index++) {
    wordToArray.push(word[index]);
  }
  for (let index = 0; index < word.length; index++) {
    reversed += wordToArray.pop();
  }
  if (word === reversed) {
    return true;
  } else {
    return false;
  }
};
