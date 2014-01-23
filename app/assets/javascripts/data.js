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
  $("ul li").remove();
  console.log(data)
  $.each(data, function(key, value){
    var imageUrl = value['imageUrl']
      var city = value['city']
      var country = value['country']
      var name = value['name']
      var rating = value['starRating']
    $("ul").append("<li><figure><img src="+imageUrl+"></figure><div class='description'>"+city+", "+country+"<div>"+name.substring(0,20)+"...<div class='rating' data-score=+" +rating+"></div></div></div></li>");
  })
        $('.rating').raty({ 'readOnly': true,
                score: function() {
              return $(this).attr('data-score');
  }

});
}

$(document).ready(function() {
  document.getElementById('button').onclick = function(e, searchValue){
    e.preventDefault();
    searchValue = $('#submit').val();
    getHotels(searchValue);
  }
});


