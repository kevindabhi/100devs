// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday;
holiday = "Diwali";
console.log (`My favorite holiday is ${holiday.toUpperCase()}` );

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThreeChar = "Hello my name is Kevin";
console.log( lastThreeChar.slice(-3) );

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subtractFromFive (num1, num2, num3, num4, num5){
    total = 100 -num1 - num2 - num3 - num4 -num5
    console.log(Math.abs(total));
}

subtractFromFive(1,2,3,5,6)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function highAndLow(n1, n2, n3){
    let min = Math.min(n1,n2,n3);
    let max = Math.max(n1,n2,n3);

    console.log(min)

}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails (){
    let x;
    x = Math.random()

    console.log(x)
    if ( x < 0.5) {
        console.log("heads")
        
    } else {
        console.log("tails")
        
    }
 }
headsOrTails()


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function loopHeadOrTails (x) {
   for (let i=0; i < x; i++) {

        let result =  headsOrTails()
        
   }
}
 
loopHeadOrTails(7)