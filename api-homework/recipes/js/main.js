//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.spoonacular.com/recipes/715538/similar?apiKey=07d69890a67648ae9609bd3aa96202d3'
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.id)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

