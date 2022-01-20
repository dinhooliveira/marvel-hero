'use strict';

describe('home', function () {
  // Load the module that contains the `home` component before each test
  beforeEach(module('home'));


  // Test the controller
  describe('HomeController', function () {
    var  ctrl;
    beforeEach(inject(function($componentController) {
      ctrl = $componentController('home');
    }));

    it('should  model heros equal []', function () {
      expect(ctrl.heros.length).toBe(0);
    });

  });
});