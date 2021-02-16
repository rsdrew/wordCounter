function computeWordCount() {
    var text = document.getElementById("text").value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && isWord(text[i])) {
        wordCount++;
        }
    }

    number.innerHTML = wordCount;
}

function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  }