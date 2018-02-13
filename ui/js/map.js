function initMap() {
    var center = {lat: 50, lng: 10};
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: center
    });

    addCustomTileLayer(map);
    
    /*var marker = new google.maps.Marker({
      position: center,
      map: map
    });*/
  }

  function addCustomTileLayer(map){

    function CoordMapType(tileSize) {
        this.tileSize = tileSize;
    }

    CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {

        if(zoom < 30) {
            var div = ownerDocument.createElement('div');
            div.innerHTML = coord;
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
            var level = zoom - 17;
            var col = coord.x + 17160;
            img.src = "http://104.155.82.223/map/wh3472/dark/" + level + "/0/0/tile.png"
            return img;
        }
    };

        map.overlayMapTypes.insertAt(
            0, new CoordMapType(new google.maps.Size(256, 256)));
    
  }

