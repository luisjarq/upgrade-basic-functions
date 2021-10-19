// Iteración #1:
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
//Iteración #2
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  if (Array.isArray(param)) {
    let len = [];
    param.forEach((a) => len.push(a.length));
    let index = len.map((x) => x);
    let max = len.sort((a, b) => a - b).pop();
    return param[index.indexOf(max)];
  } else {
    return "No es un array";
  }
}
// Iteración #3
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  if (Array.isArray(param)) {
    return param.reduce((a, b) => a + b);
  } else {
    return "No es un array";
  }
}
// Iteración #4
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  if (Array.isArray(param)) {
      return param.reduce((a, b) => a + b)/ numbers.length;
  } else {
    return "No es un array";
  }
}
// Iteración #5
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  if (Array.isArray(param)) {
    let numbers = [];
    param.forEach((d) => {
      if (typeof d == "string") {
        numbers.push(d.length);
      } else {
        numbers.push(d);
      }
    });
    return numbers.reduce((a, b) => a + b)/numbers.length;
  } else {
    return "No es un array";
  }
}
// Iteración #6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
      if (Array.isArray(param)) {        
        let unique = new Set()
        param.forEach((d) => unique.add(d));
        return unique;
      } else {
        return "No es un array";
      }
  }
