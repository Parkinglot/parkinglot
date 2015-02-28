angular.module('starter.controllers', [])

//maps
.controller('DashCtrl', function($scope, $ionicLoading, $ionicPopup) 
{
  $scope.initialise = function() {
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Add markers
    var icon = {
            url: "img/profile.jpg", //url
            scaledSize: new google.maps.Size(26, 26), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(0,29) //anchor 
    };
    var backicon = {
            url: "img/pin.png", //url
            scaledSize: new google.maps.Size(50, 55), //size
            origin: new google.maps.Point(0,0), //origin
            anchor: new google.maps.Point(12,28) //anchor 
    };

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

//facebook
.controller('FriendsCtrl', function($scope, Friends) {
   $scope.fbLogin = function() {
    openFB.login(
        function(response) {
            if (response.status === 'connected') {
                $ionicPopup.alert({title: 'Facebook login success'});
                $scope.closeLogin();
            } else {
                $ionicPopup.alert({ title: 'Facebook login failed'});
            }
        },
        {scope: 'email,publish_actions'});
  }
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
