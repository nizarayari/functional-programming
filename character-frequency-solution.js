function characterFrequency(string) {
  var strArr = string.split("");
  var hist = {};
  var result = [];

  // make histogram
  for(var i = 0; i < strArr.length; i++) {
    if(!hist[strArr[i]]) {
      hist[strArr[i]] = 1;
    }
    else {
      hist[strArr[i]]++;
    }
  }

  // format into [letter, count]
  for(var letter in hist) {
    result.push([letter, hist[key]]);
  }

  // sort result
  result.sort(function(x,y) {
    if(y[1] !== x[1]) {
      return y[1] - x[1];
    }
    return x[0].charCodeAt() - y[0].charCodeAt();
  });

  return result;
}


// functional:
var characterFrequency = function(str) {
  return groupRepeatedChars(str)
    .sort(function(a, b) {
      return b.length - a.length || a.charCodeAt(0) - b.charCodeAt(0);
    })
    .map(function(item) {
      return [item.charAt(0), item.length];
    });
}

var groupRepeatedChars = function(str) {
  // turns "baaaccc" into ["aaa", "b", "ccc"]
  return str
    .split('')
    .sort()
    .join('')
    .match(/(\D)\1*/g) || [];
}


// es6
const characterFrequency = (str) => {
  return groupRepeatedChars(str)
    .sort((a, b) => b.length - a.length || a.localeCompare(b)) // localcompare is the same as a.charCodeAt(0) - b.charCodeAt(0)
    .map((item) => [item[0], item.length])
}

const groupRepeatedChars = (str) => {
  return str
    .split('')
    .sort()
    .join('')
    .match(/(\D)\1*/g) || []; // turns "aaabbcccc" into ["aaa", "bb", "cccc"]
}
