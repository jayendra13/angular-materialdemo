(function(){
  'use strict';

  angular.module('users').controller('UserController', UserController);

  function UserController(userService, $mdBottomSheet, $mdSidenav) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.selectUser = selectUser;
    self.toggleList = toggleUserList;
    self.share = share;

    userService
      .loadAllUsers()
      .then(function(users){
        self.users = [].concat(users);
        self.selected = users[0];
      });

    function selectUser(user) {
      //self.selected = angular.isNumber(user)
      self.selected = user;
    }

    function toggleUserList() {
      $mdSidenav('left').toggle();
    }

    function share(selectUser) {
      $mdBottomSheet.show({
        controller: UserSheetController,
        controllerAs: 'vm',
        templateUrl: './bottomsheet.html',
        parent: angular.element(document.querySelector('#content'))
      });
    }

    function UserSheetController() {
      this.user = selectUser;
      this.items = [
        {name: 'Phone', icon: 'phone', icon_url: 'svg/phone.svg'},
        {name: 'Twitter', icon: 'twitter', icon_url: 'svg/twitter.svg'},
        {name: 'Facebook', icon: 'facebook', icon_url: 'svg/facebook.svg'},
        {name: 'Hangout', icon: 'hangout', icon_url: 'svg/hangout.svg'},
      ];
      this.performAction = function(action) {
        $mdBottomSheet.hide()
      }
    }
  }
})();
