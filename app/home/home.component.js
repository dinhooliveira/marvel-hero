angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: function HomeController(Hero,$location) {

      self = this;
      this.heros = [];
      this.search = '';
      this.title = 'HOME';
      this.limit = 20;
      this.offset = 0;

     

      this.doSearch = function(){
        let response = null;
        if(self.search !== '' && self.search !== null){
          response = Hero.search({nameStartsWith:self.search});
        }else{
          response = Hero.query();
        } 
       
        response.$promise.then(response => {
          self.heros = response.data.results;
        });
  
      }

      this.find = function(id){
        $location.path(`hero/${id}`);
      }

  
      this.doSearch();

    }
  }).component('card', {
    templateUrl:'home/card.template.html',
    bindings:{
      imgurl:'@',
      name:'=',
      description: '='
    }
  });