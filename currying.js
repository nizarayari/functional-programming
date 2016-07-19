// currying

// let's say function a accepts 2 arguments
// but supplies another function if only 1 argument is supplied
var add = function(arg1, arg2) {

  if (arguments.length === 1) {
    return function(arg2) {
      return arg1 + arg2
    }

  } else {
    return arg1 + arg2;
  }
};

var add10 = add(10);
add10(5); // 15

// a contrived example:
// (assuming that the curry function exists.)

// let's say we have a magical function called curry that curries any # of functions for us.
var curry = function() {}

// we pass in the add function into curry
var add = curry(function(a, b) {
  return a + b;
});

var add5 = add(5);

add5(1); // 6
add5(3); // 8
add5(10); // 15


// a less contrived example:

// make a unit converter from celcius to kelvin & vice versa
// make a unit converter from inches to cm & vice versa

// 0 Celcius     -> 273.15 kelvin   rate of change is 1
// 273.15 kelvin -> 0 celcius       rate of change is 1
// 1 inch        -> 2.54 cm         rate of change is 2.54
// 1 cm          -> 0.39 inches     rate of change is 0.39

// we could do it this way:
var celciusToKelvin = function(n) {
  return n + 273.15;
}
var kelvinToCelcius = function(n) {
  return n - 273.15;
}
var inchesToCm = function(n) {
  return n * 2.54;
}
var cmToInches = function(n) {
  return n * 0.39;
}

// or we can use some abstraction and currying
var converter = curry(function(offset, rateOfChange, val) {
  return offset + (val * rateOfChange);
});

var celciusToKelvin = converter(273.15, 1);
var kelvinToCelcius = converter(-273.15, 1);
var inchesToCm = converter(0, 2.54);
var cmToInches = converter(0, 0.39);

celciusToKelvin(5); // 278.15
inchesToCm(2); // 5.08
