angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: function HomeController(Heroi) {

      self = this;
      this.herois = [];
      this.search = '';
      this.title = 'HOME';
      this.limit = 20;
      this.offset = 0;

     

      this.doSearch = function(){
        let response = null;
        if(self.search !== '' && self.search !== null){
          response = Heroi.search({nameStartsWith:self.search});
        }else{
          response = Heroi.query();
        } 
       
        response.$promise.then(response => {
          self.herois = response.data.results;
        });
  
      }

      this.find = function(id){
        console.log(id);
        response = Heroi.find({characterId:id});
        response.$promise.then(response => {
           console.log(response);
        });
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