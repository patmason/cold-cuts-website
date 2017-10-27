$( document ).ready(function() {

//Panels
  $('#navbar a').on('click', openPanel);

  function openPanel(){
    var panelRel = this.getAttribute('rel');
    $('#panels section').not('#' + panelRel).removeClass('open');
    $('#' + panelRel).toggleClass('open');
  }

  $('.close').on('click', function(){
    $('#panels section').removeClass('open');
  });

//Past exhibition documents open
  $('.exhibition-info').on('click', function(){
    $(this).next('.exhibition-documents').toggleClass('clicked');
  });


//Google maps
  function initialize() {
    var coldCutsMap = {lat: -33.889953, lng: 151.159885};
  	var map = new google.maps.Map(document.getElementById('garage'), {
    zoom: 17,
    center: coldCutsMap
    });
    var marker = new google.maps.Marker({
      position: coldCutsMap,
      map: map
    });
    google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
    content:"Cold Cuts"
    });
    infowindow.open(map,marker);
    });
  }

  function hideMap() {
    google.maps.Marker.hide();
  }

  var mapCounter = 0;

  function mapClickCount() {
    mapCounter++;
    if (mapCounter==1) initialize();
    if (mapCounter==2) hideMap();
  };

  $('#garage').on('click',mapClickCount);

//   //Flickity
//   $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });

});
