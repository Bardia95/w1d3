function characterPosition(string) {
  var positions = {};
  var array = string.toLowerCase().split("");
  for (var i = 0; i < array.length; i++) {
    if (!positions[array[i]] && array[i] != " ") {
      positions[array[i]] = [i];
    } else if (array[i] != " ") {
      positions[array[i]].push(i);
    }
  };
  return positions
}

console.log(characterPosition('lighthouse in the house'));