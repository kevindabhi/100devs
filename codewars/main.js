//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// pseudo code

// divide number by 2, if the remainder is 0 then it is even and if the remainder is 1 then the number is odd




// function oddOrEven () 


// {
//     let number = prompt("insert a whole number.");
//     if ((number%2) == 0) {
//         console.log("the number you entered is even")
//     }
//     else if ((number%2) == 1 )
//     {
//     console.log("odd number")
//     }
//     else {
//         console.log("please enter a valid whole number");
//     }


// }

// oddOrEven()


// Copied solution

// function even_or_odd(number) {
// 	var x = number % 2;
//   if (x === 0) {
// 		return "Even";
// 	} else {
// 		return "Odd";
// 	}
// }



// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool){
   let x = bool;
   if (bool === true) {
       console.log("yes")
   }
   else{
       console.log("No")
   }
   return
  }

  boolToWord(true)