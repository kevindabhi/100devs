document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value
  day = day.toLowerCase();
  
  //Conditionals go here
  if(day === "tuesday" || day === "thursday" ){
    document.querySelector('#placeToPutResult').innerHTML = "Class Day!!"
  }else if(day === "saturday" || day === "sunday"){
    document.querySelector('#placeToPutResult').innerHTML = "Weekend!"
  }else{
    document.querySelector('#placeToPutResult').innerHTML = "Boring"
  }

}
