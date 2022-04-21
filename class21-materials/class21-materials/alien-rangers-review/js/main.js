//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["LOST", "Stargate", "Gaki no Tsukai"]
shows.forEach(show=>console.log(show))

//Create and array of numbers
let nums = [4,8,15,16,23,41]
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter( n=> n%2 === 0 )
console.log(onlyEvens(nums))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
    let sorted = arr.sort((a,b)=> a-b)
    alert(sorted[1] + sorted[sorted.length - 2])

}
sumSecondLowAndHigh ([1,2,4,5,3]);