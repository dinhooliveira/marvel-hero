angular.module("hero")
    .component("hero", {
        templateUrl: 'hero/hero.template.html',
        controller: function getHeroController(Hero,$routeParams,$location) {
            const self = this;
            this.characterId = $routeParams.characterId;
            this.hero;
            response = Hero.find({ characterId: this.characterId });
            response.$promise.then(response => {
                self.hero =  response.data.results[0];
                console.log(self.hero);
            });

            this.goHome = function(){
                $location.path("/");
            }

        }
    });