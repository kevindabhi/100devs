// const number = Number(prompt ("Enter a number."));
// if (number >= 0) {
//     console.log(`${number} is positive or 0`);
    
// }

// const number = Number(prompt('Enter a number'));

// if (number === 0) {
//         console.log(`${number} is Zero`);

// }

// else {
//     console.log(`${number} is Positive or negative`);
// }

// const number = Number(prompt("Enter a number"));
// if (number > 0)
// {
//     console.log(`${number} is greater than zero`);

// }

// else if (number<0)
// {
//     console.log(`${number} is smaller than zero`);
// }

// else {
//     console.log (`${number} is Zero`);
// }


// const number = Number(prompt("Enter a number:"));
//
// if (number > 0) {
// console.log(`${number} is positive`);
// } else {
// // number <= 0
// if (number < 0) {
// console.log(`${number} is negative`);
// } else {
// // number === 0
// console.log(`${number} is zero`);
// }
// }


// const weather = prompt("What is the weather like?");

// if (weather === "sunny") {
//     console.log("T Shirt time");
// }
// else if (weather === "rain") {
//     console.log("rain coat.");
// }
// else if (weather === "windy") {
//     console.log ("bring the umbrella");
// }
// else{
//     console.log ("Not a valid weather");
// }

// const weather = prompt("what is the weather like?");

// switch (weather) {
//     case "sunny": 
//         console.log("Tshirt time");
//         break;
//     case "rain":
//         console.log("bring a rain coat");
//         break;
//     case "windy":
//         console.log("swooosh");
//         break;

//     default:
//         console.log("Invalid weather");
//         break;
// }


//FOLLOWING DAY 

// const day = prompt("Enter a day");

// switch (day)
// {
//     case "monday" : console.log("The next day is Tuesday");
//     break;

//     case "tuesday" : console.log("The next day is wednesday");
//     break;

//     case "wednesday" : console.log("the next day is thursday");
//     break;

//     case "thursday" : console.log("The next day is friday");
//     break;

//     case "friday" : console.log("The next day is saturday");
//     break;

//     case "saturday" : console.log("The next day is sunday");
//     break;

//     case "sunday" : console.log("The next day is Monday");
//     break;

//     default: console.log("invalid day")
//     break;

// }





//Number comparison. Did not understand the program flow. check again.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));
// if (nb1 > nb2) {
// nb1 = nb3 * 2;
// } 
// else {
// nb1++;

// if (nb2 > nb3) {
// nb1 += nb3 * 3;
// } 
// else {
// nb1 = 0;
// nb3 = nb3 * 2 + nb2;
// }

// }
// console.log(nb1, nb2, nb3);



// Number of days in a month. using switch case. I wonder if i can make the code a bit smaller.

// const month = Number(prompt("Enter a month between 1 and 12"));

// switch (month) {
//     case 1: console.log ("This month has 31 days.")
        
//         break;
//     case 2: console.log ("This month has 28 days.")
        
//         break;

//     case 3: console.log ("This month has 31 days.")
        
//         break;  
//         case 1: console.log ("This month has 31 days.")
        
//         break;
//     case 4: console.log ("This month has 30 days.")
        
//         break;
//     case 5: console.log ("This month has 31 days.")
        
//         break;
//     case 6: console.log ("This month has 30 days.")
        
//         break;
//     case 7: console.log ("This month has 31 days.")
        
//         break;
//     case 8: console.log ("This month has 31 days.")
        
//         break;   
//         case 9: console.log ("This month has 30 days.")
        
//         break;  
        
//         case 10: console.log ("This month has 31 days.")
        
//         break;

//         case 11: console.log ("This month has 30 days.")
        
//         break;
        
//         case 12: console.log ("This month has 31 days.")
        
//         break;
//     default:

//     console.log("Invalid input.")
//         break;
// }




//Following second

let hour = Number(prompt("Enter Hour"));
let minute = Number(prompt("Enter Minute"));
let second = Number(prompt("Enter second"));

if (second<59)
{
    second = second+1;
    minute=minute;
    hour=hour;
    console.log(`The time is ${hour}:${minute}:${second}`);

}



  else if(second=59)

     {
         if(minute<59) {
                        second=00;
                        minute=minute+1;
                        hour=hour;
                        console.log(`The time is ${hour}:${minute}:${second}`);

         }

         else if(minute=59) {
             second=00;
             minute=00;
             hour=hour+1;

             console.log(`The time is ${hour}:${minute}:${second}`);

             if(hour<24)
             {
                 second=second;
                 minute=minute;
                 hour=hour+1;
                 console.log(`The time is ${hour}:${minute}:${second}`);
             }
             else if(hour=24){second=00;
                 minute=00;
                 hour=00;
                 console.log(`The time is ${hour}:${minute}:${second}`);
    }
         }
     }