function countLetters(string) {
  var letterCount = {};
  var array = string.toLowerCase().split("");
  for (var i = 0; i < array.length; i++) {
    if (letterCount[array[i]] && array[i] != " ") {
        letterCount[array[i]] += 1;
    } else if (array[i] != " ") {
      letterCount[array[i]] = 1;
    }
  }
  return letterCount
}

console.log(countLetters('lighthouse in the house'));