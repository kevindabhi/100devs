//Write your pseduo code first! 

  /*
    We want to convert temperature from c to F
  */

//only on click
document.querySelector('#yell').addEventListener('click', run)

function run() {
    console.log('HELLO TWITCH')
    //get value out of input
    let pumpkin = document.querySelector('#firstName').value
    //convert the value
    pumpkin = pumpkin * 9/5 + 32
    //show the value to user
    document.querySelector('#placeToYell').innerText = pumpkin
  }
