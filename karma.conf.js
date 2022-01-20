//jshint strict: false
module.exports = function(config) {
    config.set({
  
      basePath: './app',
  
      files: [
        'lib/blueimp-md5/js/md5.js',
        'lib/angular/angular.js',
        'lib/angular-resource/angular-resource.js',
        'lib/angular-route/angular-route.js',
        '../node_modules/angular-mocks/angular-mocks.js',
        'core/**/*.js',
        'view*/**/*.js',
        '**/*.module.js',
        '*!(.module|.spec).js',
        '!(lib)/**/*!(.module|.spec).js',
        '**/*.spec.js'
      ],
  
      autoWatch: true,
  
      frameworks: ['jasmine'],
  
      browsers: ['Chrome'],
  
      plugins: [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine'
      ]
  
    });
  };