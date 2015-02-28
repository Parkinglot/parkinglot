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
      [40.890542, -88.274856, 4],
      [40.923036, -88.259052, 5],
      [40.028249, -88.157507, 3],
      [40.80010128657071, -88.28747820854187, 2],
      [40.950198, -88.259302, 1]
    ];
    var icon = {
            url: "img/profile.jpg", //url
            scaledSize: new google.maps.Size(26, 26), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(0,29) //anchor 
    };
    for (var i = 0; i < beaches.length; i++) 
    {
      var beach = beaches[i];
      var myLatLng = new google.maps.LatLng(beach[0], beach[1]);
      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: icon,
          zIndex: beach[2]
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
            map: map,
            icon: backicon
        });
        var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            icon: icon
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
})


//chats
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

//account settings
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
