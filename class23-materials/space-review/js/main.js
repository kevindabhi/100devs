//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArray = [4,8,15,16,23,43];

let initialValue = 0;
let sumWithInitial = numArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumWithInitial);    

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = numArray.map(num => num**2)
console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console

let unoreverse = str => console.log(str.split("").reverse().join(""))

unoreverse("hello")

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palinCheck = str => alert(str === str.split("").reverse().join(""))

palinCheck("121")