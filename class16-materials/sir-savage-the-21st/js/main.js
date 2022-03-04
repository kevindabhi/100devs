//Create a function that has a loop that prints '21' 21 times to the console and then call that function

function twentyOne ()
{
    for (i=1; i<= 21; i++ ) {
        console.log(i);
        document.getElementById('savageSays').innerHTML += "21"
    }
   
}

twentyOne ()



// //Bonus can you make it print '21' 21 times to the dom?

// function writeToDom() {

// document.getElementById('savageSays').innerHTML = two1()

// }

// writeToDom()