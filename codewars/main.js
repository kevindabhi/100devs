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

// function boolToWord( bool){
//    let x = bool;
//    if (bool === true) {
//        console.log("yes")
//    }
//    else{
//        console.log("No")
//    }
//    return
//   }

//   boolToWord(true)





//Reversed Strings
// Pseudo Code
// First I want to have an array, then i want to put the array into another array starting from first word first till the last word in the end, since this is FILO i will then console log this array.

// function solution(str){ 
//     return str
//     .split("")
//     .reverse()
//     .join("");
// }

// solution("hello")

// Code Explanation
// Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

// Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

// Next we chain the reverse() function, which takes our array of characters and reverses them.

// Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

