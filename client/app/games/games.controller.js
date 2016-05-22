'use strict';

(function() {

  class GameController {

    constructor($http) {
      this.$http = $http;
    }

    $onInit() {
      this.$http.get('/api/games').then(response => {
          this.games = response.data;
          console.log(this.games);
        });

    }

    addNewGame() {
      console.log("added");
      if (this.newGame) {
        this.$http.post('/api/games', {
          name: this.newGame.name,
          platform : this.newGame.platform,
          genre: this.newGame.genre
        });
        this.newGame = '';
        this.$http.get('/api/games').then(response => {
          this.games = response.data;
        });
      }
    }

    deleteGame(game) {
      this.$http.delete('/api/games/' + game._id);
    }
  }

  angular.module('meanTutorialApp')
    .component('games', {
      templateUrl: 'app/games/games.html',
      controller: GameController
    });
})();
