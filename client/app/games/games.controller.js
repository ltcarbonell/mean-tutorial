'use strict';
(function(){

class GamesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('meanTutorialApp')
  .component('games', {
    templateUrl: 'app/games/games.html',
    controller: GamesComponent
  });

})();
