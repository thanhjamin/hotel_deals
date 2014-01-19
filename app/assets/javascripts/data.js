function getHotels(searchValue){
  if (searchValue.length == 0) {
    searchValue = undefined;
    alert("Please enter in a city")
  }

  $.ajax({
        type: "GET",
        url: "http://jsonp.jit.su/?callback=displayAll&url=http%3A%2F%2Fdeals.expedia.com%2Fbeta%2Fdeals%2Fhotels.json%3Fcity%3D" + searchValue,
        dataType: "JSONP",
        success: displayAll,
        error: function(jqXHR, textStatus, errorThrown){
          console.log(jqXHR, textStatus, errorThrown);
        }

  });
}

function displayAll(data){
  console.log(data)
  $.each(data, function(key, value){
    $("body").append("<div><span>"+value['city']+":</span><span>"+value['starRating']+"</span></div>");
  })
}

$(document).ready(function() {
  document.getElementById('button').onclick = function(e, searchValue){
    e.preventDefault();
    searchValue = $('#submit').val();
    getHotels(searchValue);
  }
});


