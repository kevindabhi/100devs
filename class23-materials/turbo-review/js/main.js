// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str;
str = "hello how are you?"
let position = str.search('\\?');
console.log(position)
if (position !== -1) {
    console.log("This is a question.")
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
multipleWords = "in this study group we should call ourselves jr. dev and then we will apply for jobs which are for jr. dev"

console.log(multipleWords.replaceAll('jr. dev', 'Software Engineer'));


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissor(){
    let x = Math.random()
    if (x<0.3) {
        return "rock"
    }

    else if ( x <0.6) {
        return "paper"
    }
    else{
        return "scissors"
    }
}



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function match (playerPlay){
    let botPlay = rockPaperScissor()
    console.log (botPlay)
    if ((botPlay === "rock" && playerPlay === "scissors") || 
    (botPlay === "paper" && playerPlay === "rock") ||
    (botPlay === "scissors" && playerPlay === "paper"))  
    
    { console.log ("you lose")}

    else if (playerPlay === botPlay) {
        console.log("it is a tie")
    }
    else{
        console.log("you win")
    }

}

match("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
