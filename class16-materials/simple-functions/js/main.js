//---Easy
//create a function that subtracts two numbers and alerts the difference

/*
function difference(difnum1, difnum2) {
  
    let differenceNum = difnum1 -difnum2;
     return differenceNum;
 
}

alert(difference(20, 50));

*/


//create a function that divides three numbers and console logs the quotient
/*
function dividesThreeNumbers(num1, num2, num3){
    console.log((num1/ num2) /num3);
}

dividesThreeNumbers(20,2,2);
*/

//create a function that multiplys three numbers and returns the product



// function multipliesThreeNumbers(num1, num2, num3) {
//     return  = num1*num2*num3;
//     
// }

// let product = multipliesThreeNumbers(2,3,5)
//    alert(product)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number


// function medium (num1, num2, num3)
// {
//     addition = num1+ num2;
//     remainder = (addition) % num3;
//      return
//     console.log(remainder);
// }

//  let result = medium(22,3,9)
// alert (result)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(num1, num2, num3, num4)
{
    mul = num1*num2;

    if (mul>100) {
        console.log(num3+num4 + " multiplication was more than 100");
    }
    else if (mul<100)
    {
        console.log(num3-num4 + " multiplication was less than 100")
    }
    else if (mul=100)
    {
        let mul3 = (num1*num2*num3 )
        result = (num4/mul3 + " multiplication was equal to 100");
        console.log(result); 
    }
}

hard(2,50,2,7);