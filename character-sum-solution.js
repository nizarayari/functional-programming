// imperative
var charSum = function(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    var current = parseInt(str[i]); // digit or NaN
    if (current) {
      sum += current
    }
  }
  return sum;
}

// functional
var charSum = function(str) {
  return str
    .split('')
    .filter(function(item) {
      return parseInt(item);
    })
    .reduce(function(sum, current) {
      return sum + parseInt(current);
    }, 0);
}

// es6
const charSum = (str) => {
  return str
    .split('')
    .filter(item => parseInt(item))
    .reduce((sum, current) => (sum + parseInt(current)), 0);
}
