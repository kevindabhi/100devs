// let number;
// for (number=0; number <6; number++)
// {console.log(number);}


//WHILE LOOP

// let number= 1;
// while (number<=5) {
    
//     console.log(number);
//     number++;
// }

//FOR loop


// let number;
// for (number= 1; number<=5; number++)
//     {console.log(number)}


//Enter a specific letter

// let letter = "";
// while (letter!=="X") {
//    letter = prompt("Enter letter X to exit.");
    
// }



//carousel with a While loop

// let turns;
// let iteration= 1;
// turns = Number(prompt("Enter number of turns."));


// while (iteration <=turns) {
//     console.log(`This is turn number ${iteration}`);
//     iteration++
// }


//Carousel with a For code

// let loops;
// for (loops=1; loops<=10; loops++)
// {
//     console.log(`This is loop number ${loops}`);
// }



//carousel code with FOR LOOP and input. (if it is not a number it will prompt to enter a valid number.)

// let iteration;
// let turns = Number(prompt("Enter the number of loops"));

// if (isNaN(turns)) {
    
   
//     document.write("enter a valid number");
    
// }

// else {
    
//     for(iteration=1; iteration<=turns; iteration++)
//     {
//         document.write(`This is loop number ${iteration}`);
//         document.write("<br>");
//     }
//     }



//parity

// let i = Number(prompt("Enter a number to check."));

//     if (i % 2 !== 0) {
//     console.log(`${i} is odd`);
//     }
//    else {
//        console.log(`${i} is not odd`);
//    }


//Accept number less than 100. Input validation.

// let num = Number(prompt("enter a number."));
// if (num<=100) {
//     console.log(`The number is ${num}`);
//     if (num >=50 && num <=100) {
//         console.log(`The ${num} is between 50 and 100`);
//     }   
// } else {
    
//     console.log("Please enter a number less than or equal to 100");
// }



//TABLES


// let num = Number(prompt("Enter a number"));
// let table = 1;
// let xyz;


// if (num<=9 && num>=2) {while (table <=10) {
        
//     xyz=num*table;
//     console.log(`${num} ${table}s are ${xyz}`);
//     table++
// }
    
// }


// else {console.log("Please enter a number between 2 and 9");}



//Neither yes nor no 

//I did not understand why the OR did not work and why && worked.

// let i= prompt("enter a word");


// while(i!=="yes" && "no") {
//     i= prompt("enter a word");
// }