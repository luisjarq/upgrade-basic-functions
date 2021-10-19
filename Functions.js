// Iteración #1:
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
//Iteración #2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    if(Array.isArray(param)){
        let len = [];
        param.forEach((a) =>len.push(a.length))
        let index = len.map(x=> x);
        let max = len.sort((a,b) => a-b).pop()
        return param[index.indexOf(max)];
    }
    else{
        return 'No es un array';
    }
}
// Iteración #3
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
   return param.reduce((a,b) => a+b)
}