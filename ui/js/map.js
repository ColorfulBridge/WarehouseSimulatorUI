function initMap() {
    var center = {lat: 50, lng: 10};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: center
    });

    addCustomTileLayer(map);
    
    /*var marker = new google.maps.Marker({
      position: center,
      map: map
    });*/
  }

  function addCustomTileLayer(map, configuration){

    function CoordMapType(tileSize) {
        this.tileSize = tileSize;
    }

    

    CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {

        if(zoom < 18) {
            var div = ownerDocument.createElement('div');
            div.innerHTML = coord + " z" + zoom;
            div.style.width = this.tileSize.width + 'px';
            div.style.height = this.tileSize.height + 'px';
            div.style.fontSize = '10';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
            div.style.borderColor = '#AAAAAA';
            return div;
        } else {
            console.log(coord);
            var img = ownerDocument.createElement('img');
            // div.innerHTML = coord;
            img.style.width = this.tileSize.width + 'px';
            img.style.height = this.tileSize.height + 'px';
            img.style.opacity = "0.2";
            /* div.style.fontSize = '10';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
            div.style.borderColor = '#AAAAAA';*/
            var level = zoom;
            var col = coord.x;
            var row = coord.y;
            img.src = "http://localhost:8080/map/wh3472/dark/" + level + "/" + col + "/" + row + "/tile.png?transform=ma1"
            return img;
        }
    };

        map.overlayMapTypes.insertAt(0, new CoordMapType(new google.maps.Size(256, 256)));

        //zoom already in
        var center = {lat: 49.4195605, lng: 8.5061003};
        map.setCenter(center);
        map.setZoom(17);

    
  }


  