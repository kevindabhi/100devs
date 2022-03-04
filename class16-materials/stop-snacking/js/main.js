//Create a function that grabs the number of snacks from the input and tells you to stop that many times



help.addEventListener('click', stopSnacking)


function stopSnacking(){
    let x = Number(document.querySelector('input').value)
    console.log(x)
    let i = 0;
    while (i<x) {
        i++;
        console.log("stop eating")
    }

 }