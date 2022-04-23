// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " mango lassi "
favDrink = favDrink.trim()
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords  ="Kevin Batman apple music netflix"
wordArray = multipleWords.split(" ");

wordArray.forEach(element => { if (element == "apple") {
    console.log("contains apple.")
    
}
    
});


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors () {
    let x = Math.random();
    if (x <=0.3){
        return "rock"
    }
    else if(x>0.3 && x<=0.6) {
        return "paper"
    }
    else if (x>0.6){
        return "scissors"
    }
}

rockPaperScissors()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rpsUserinput(){
    let y = rockPaperScissors()
    console.log(y)
    let userInput = prompt("enter either rock, paper, or scissors");
    if (userInput === y) {
        console.log("tie")
        
    } else if (userInput === "rock" && y === "paper" ) {
    console.log("you lose")        
    }
    else if (userInput === "paper" && y === "scissors" ) {
        console.log("you lose")        
        }

    else if (userInput === "scissors" && y === "rock" ) {
    console.log("you lose")        
    }    

    else if (userInput === "rock" && y === "scissors" ) {
    console.log("you win")        
    }

    else if (userInput === "paper" && y === "rock" ) {
        console.log("you win")        
        }
    else if (userInput === "scissors" && y === "paper" ) {
    console.log("you win    ")        
    }
        
}

rpsUserinput()

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function playGameXtimes(arr){
    arr.forEach( choice => rpsUserinput(choice) )
}

playGameXtimes(["rock", "paper", "scissors"])