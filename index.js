module.exports = function(str) {
  var result = [];
  var inQuote = false;
  var currentWord = '';

  str.split('').forEach(function(token, tokenIndex, pieces) {
    if (tokenIndex > 0 && pieces[tokenIndex - 1] === '\\') {
      currentWord += token;
      return;
    }

    if (token === '"') {
      inQuote = !inQuote;
      if (!inQuote && currentWord.length) {
        result.push(currentWord);
        currentWord = '';
      }
      return;
    }

    if (token === ' ' && !inQuote) {
      if (currentWord.length) {
        result.push(currentWord);
        currentWord = '';
      }
      return;
    }

    currentWord += token;
  });

  if (currentWord.length) {
    result.push(currentWord);
  }

  return result;
};
