//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getUVIndex)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = "https://api.openuv.io/api/v1/uv?lat=52.3759&lng=9.7320"
  
  
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         console.log(data.value)
//         document.querySelector("h2").innerText = data.value

        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


function getUVIndex() {
  var lat = $('#lat').val();
  var lng = $('#lng').val();
  var alt = $('#alt').val();
  var ozone = $('#ozone').val();
  var dt = $('#dt').val();
 
  $.ajax({
    type: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
      request.setRequestHeader('x-access-token', '8ffde9c3749c1714810dd41e4fb584ba');
    },
    url: 'https://api.openuv.io/api/v1/uv?lat=' + 52.1 + '&lng=' + 9.52 + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
    success: function(response) {
      //handle successful response
      console.log(data)
    },
    error: function(response) {
      // handle error response
    }
  });
 }