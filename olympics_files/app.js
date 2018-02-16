var main = function initMap() {
        var PyeongChang = {lat: 37.671, lng: 128.703};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: PyeongChang
        });
        var marker = new google.maps.Marker({
          position: PyeongChang,
          map: map
        });
      };


$(document).ready(main);
