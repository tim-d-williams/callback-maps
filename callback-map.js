var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(words, callBack) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    newArray.push(callBack(words[i]));
  } return newArray;
}


//same as above using map method
// function map(words, callBack) {
//   return words.map(function(arr) {
//     return callBack(arr)
//   })
// }