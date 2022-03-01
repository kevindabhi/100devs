// *Variables*
// Create a variable and console log the value
let userName = "Kevin"
console.log(userName);


//This code uses variable using let and then logs the variable.


// Create a variable, add 10 to it, and alert the value


// let num1 = 0;
// num1 = num1 + 10;
// alert(num1);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

//Another option could be to prompt and take numbers from users.

// function differenceFour (num1, num2, num3, num4) {
//     let difference = num1 - num2 - num3 - num4;
//     alert(difference);
//   }
//   differenceFour(9, 5, 6, 10);


// Create a function that divides one number by another and returns the remainder

// function divide(num1, num2) {
//     let remainder = num1 % num2;
//     console.log(remainder);
//   }
//   divide(235, 7);



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// function woohoo (num1, num2) {
//     let jumanji = num1 + num2;
//     if (jumanji>50) {
//         alert("jumanji");
//     }
//     else {
//         console.log(jumanji);
//     }

// }
// woohoo(8, 90)

/*comment section for jumanji

here i do not know whether i should be alerting jumanji or alerting the number
i did the if and then else i logged in the number

*/


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


function zebra (num1, num2, num3)
{
    let mul1, mod
    mul1  = num1 * num2 * num3;
    mod = mul1 % 3 ;
    
    if(mod==0) {
        console.log("Zebra");
    }
    else{ console.log("no zebra")}

}

zebra(1, 1, 3)

//I got got by the assignment operator and comparative operator at line 71 in mod.
