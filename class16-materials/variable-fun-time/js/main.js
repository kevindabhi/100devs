//--- Easy
//create a variable and assign it a number

let easy = 20;

//minus 10 from that number

easy = easy -10;


//print that number to the console

console.log(easy);

//--- Medium
//create a variable that holds a value from the input




// //add 25 to that number
// medium = medium + 25;

// //alert that number
// alert(medium)

//--- Hard
//create a variable that holds the h1

const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables


h1Holder.addEventListener('click', sum)

function sum (){
    let medium = document.querySelector('#danceDanceRevolution').value;
    console.log(Number(easy) + Number(medium));
}