angular.module('starter.controllers', [])

//maps
.controller('DashCtrl', function($scope, $ionicLoading, $ionicPopup) 
{
  //start map
  $scope.initialise = function() {
    var myLatlng = new google.maps.LatLng(40.113803,-88.2249157,17);
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var beaches = [
      [40.113803,-88.2259157, 4],
      [40.113803,-88.2269157, 5],
      [40.114803,-88.2249157, 3],
      [40.115803,-88.2249157, 2],
      [40.115803,-88.2269157, 1]
    ];
    var park = [
      [40.123803,-88.2209157, 4],
      [40.103803,-88.2289157, 5],
      [40.115803,-88.2239157, 3],
      [40.116803,-88.2229157, 2],
      [40.117803,-88.2219157, 1]
    ];
    var icon = {
            url: "img/profile.jpg", //url
            scaledSize: new google.maps.Size(26, 26), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(15,40) //anchor 
    };
    var selficon = {
            url: "img/images2.png", //url
            scaledSize: new google.maps.Size(22, 38), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(15,40) //anchor 
    };//for curr position
    var parkicon = {
            url: "img/images.png", //url
            scaledSize: new google.maps.Size(26, 38), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(12,28) //anchor 
    };
    for (var i = 0; i < beaches.length; i++) 
    {
      var beach = beaches[i];
      var myLatLng = new google.maps.LatLng(beach[0], beach[1]);
      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          //icon: backicon,
          zIndex: beach[2]
      });
    }
    var mark = new Array(park.length);
    for (var i = 0; i < park.length; i++) 
    {
      var p = park[i];
      var myLatLng = new google.maps.LatLng(p[0], p[1]);
       mark[i] = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: parkicon,
        zIndex: p[2]
      });
    }
    
    var backicon = {
            url: "img/pin.png", //url
            scaledSize: new google.maps.Size(50, 60), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(12,28) //anchor 
    };

    //Add markers
    //set current position
    navigator.geolocation.getCurrentPosition(function(pos) {
        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        var backLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map
          //  icon: backicon
        });
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            icon: selficon
        });
       var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading" style= "font-family:Verdana;"><b>Hello, I trigged this marker!</b></h5>'+
      '<div id="bodyContent">'+'<p>Latitude : </p>'+pos.coords.latitude+'<br> </br></p>Longitude : </p>'+pos.coords.longitude+ '<br> </br>'+
      '<img src="img/profile.jpg" width=180 height=240'+
      '</div>'+
      '</div>';//selficon
      var park1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading" style= "font-family:Verdana;"><b>Parking available here!</b></h5>'+
      '<div id="bodyContent">'+'<p>Latitude : 40.123803</p><br> </br></p>Longitude : -88.2209157</p><br> </br>'+
      '</div>'+
      '</div>';//parking
      var park2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading" style= "font-family:Verdana;"><b>Parking available here!</b></h5>'+
      '<div id="bodyContent">'+'<p>Latitude : 40.103803</p><br> </br></p>Longitude : -88.2289157</p><br> </br>'+
      '</div>'+
      '</div>';//parking
      var park3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading" style= "font-family:Verdana;"><b>Parking available here!</b></h5>'+
      '<div id="bodyContent">'+'<p>Latitude : 40.115803</p><br> </br></p>Longitude : -88.2239157</p><br> </br>'+
      '</div>'+
      '</div>';//parking
      var park4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading" style= "font-family:Verdana;"><b>Parking available here!</b></h5>'+
      '<div id="bodyContent">'+'<p>Latitude : 40.116803</p><br> </br></p>Longitude : -88.2229157</p><br> </br>'+
      '</div>'+
      '</div>';//parking
      var park5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h5 id="firstHeading" class="firstHeading" style= "font-family:Verdana;"><b>Parking available here!</b></h5>'+
      '<div id="bodyContent">'+'<p>Latitude : 40.117803</p><br> </br></p>Longitude : -88.2219157</p><br> </br>'+
      '</div>'+
      '</div>';//parking
      
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var infowindow1 = new google.maps.InfoWindow({
        content: park1
      });
      var infowindow2 = new google.maps.InfoWindow({
        content: park2
      });
      var infowindow3 = new google.maps.InfoWindow({
        content: park3
      });
      var infowindow4 = new google.maps.InfoWindow({
        content: park4
      });
      var infowindow5 = new google.maps.InfoWindow({
        content: park5
      });
      google.maps.event.addListener(myLocation, 'click', function() {
        infowindow.open(map,myLocation);
      });
      google.maps.event.addListener(mark[0], 'click', function() {
        infowindow1.open(map,mark[0]);
      });
      google.maps.event.addListener(mark[1], 'click', function() {
        infowindow2.open(map,mark[1]);
      });
      google.maps.event.addListener(mark[2], 'click', function() {
        infowindow3.open(map,mark[2]);
      });
      google.maps.event.addListener(mark[3], 'click', function() {
        infowindow4.open(map,mark[3]);
      });
      google.maps.event.addListener(mark[4], 'click', function() {
        infowindow5.open(map,mark[4]);
      }); 
    });
   
    $scope.map = map;
  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());

  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      noBackdrop: false,
      duration: 2000
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

      $ionicPopup.alert({title: 'Success!', content:"You warned the masses"});

      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };
   $scope.parking = function() {
    if(!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      noBackdrop: false,
      duration: 2000
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

      $ionicPopup.alert({title: 'Success!', content:"Thank you for donating time"});

      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})

//account settings
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.fbLogin = function() {
    openFB.login(
        function(response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
              $scope.closeLogin();
                alert('Facebook login failed');
            }
        },
        {scope: 'email'});
}

$scope.fbLogout=function(){
    openFB.logout(
      function() {
          $state.go('login');
      },
      errorHandler);
    localStorage.clear();
    sessionStorage.clear();
  }

});
