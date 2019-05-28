function initMap() {
  let middleAmerica = { lat: 49.120928, lng: -103.056465 }
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: middleAmerica
  })


  let mcmullenAlabama = {
    coords: { lat: 33.14187, lng: -88.1764 },
    info: 'McMullen, Population: 9'
  }
  let hobartBayAlaska = {
    coords: {
      lat: 57.4658, lng: -133.3533
    },
    info: 'Hobart, Population: 1'
  }
  let jeromeArizona = {
    coords: {
      lat: 34.7489,
      lng: -112.1138
    },
    info: 'Jerome, Population: 455'
  }
  let magnetCoveArkansas = {
    coords: {
      lat: 34.4445,
      lng: -92.8702
    },
    info: 'Magnet Cove, Population: 5'
  }
  let vernonCalifornia = {
    coords: {
      lat: 34.0039,
      lng: -118.2301
    },
    info: 'Vernon, Population: 209'
  }

  let bonanzaColorado = {
    coords: {
      lat: 38.2947,
      lng: -106.1422
    },
    info: 'Bonanza, Population: 1'
  }

  let unionConnecticut = {
    coords: {
      lat: 41.9909,
      lng: -72.1573
    },
    info: 'Union, Population: 843'
  }

  let hartlyDelaware = {
    coords: {
      lat: 39.1687,
      lng: -75.7133
    },
    info: 'Hartly, Population: 71'
  }

  let weekiWacheeFlorida = {
    coords: {
      lat: 28.5156,
      lng: -82.5729
    },
    info: 'Weeki Wachee, Population: 5'
  }

  let tatecityGeorgia = {
    coords: {
      lat: 34.9817,
      lng: -83.5544
    },
    info: 'Tate City, Population: 16'
  }




  function newMarker(obj) {
    let markers = new google.maps.Marker({ position: obj.coords, map: map });


    let infoWindow = new google.maps.InfoWindow({
      content: obj.info
    })

    markers.addListener('click', () => {
      infoWindow.open(map, markers)
    })
  }





  newMarker(mcmullenAlabama)
  newMarker(hobartBayAlaska)
  newMarker(jeromeArizona)
  newMarker(magnetCoveArkansas)
  newMarker(vernonCalifornia)
  newMarker(bonanzaColorado)
  newMarker(unionConnecticut)
  newMarker(hartlyDelaware)
  newMarker(weekiWacheeFlorida)
  newMarker(tatecityGeorgia)

}



