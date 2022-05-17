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
      url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
      success: function(response) {
        //handle successful response
      },
      error: function(response) {
        // handle error response
      }
    });
   }