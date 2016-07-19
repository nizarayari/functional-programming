// function composition

// let's say we want to add 10 to each item, then multiply the items by 2.

var arr = [1, 2, 3];
var result = arr.map(function(item) {
  return (item + 10) * 2;
}); // [22, 24, 26]

// we can break this into 2 steps: add10, then multiplyBy2

function add10(n) { return n + 10; };
function multiplyBy2(n) { return n * 2 };
var result = arr.map(function(item) {
  return multiplyBy2(add10(n));
});

// what if we wanted to repeatedly generate a function that
// was composed of two sub steps, or any number of sub steps?

// what if, instead, we could generate a function that does
// what that anonymous function does from above?
// Instead of hard coding multiplyBy2 and add10, it can compose
// together any 2 functions?

function compose(fn1, fn2) {
  // simple version, hard coded 2 functions
  return function() {
    fn2(fn1.apply(null, arguments));
  }
}

var result = arr.map(compose(add10, multiplyBy2))
