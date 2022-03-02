//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {
 //one of our issues was what to do when the input is capitalised so we put everything in lowercase by using the method .toLowerCase() and then compare it with our code.

  const day = document.querySelector('#day').value.toLowerCase()
 //it checks if it is tuesday, or thursday if it is then it says you have class. 
  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS!!")
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}
