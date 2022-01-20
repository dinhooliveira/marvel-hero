angular.
  module('heroApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/hero/:characterId', {
          template: '<hero></hero>'
        }).
        otherwise('/home');
    }
  ]);