//Example fetch using pokemonapi.co
let deckID=""
document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=JqgDsgC9C1Is1wLLuBmysYMV5MJbDFxTmbgX6hu5&date=${choice}`

 
}

