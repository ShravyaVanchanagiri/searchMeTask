// Karma configuration
// Generated on Thu Mar 30 2017 19:41:20 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/bower_components/angular-bootstrap/ui-bootstrap.js',
      './app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      './app/bower_components/angular-route/angular-route.js',
      './app/bower_components/angularjs-datepicker/dist/angular-datepicker.js',
      'https://unpkg.com/ng-table@2.0.2/bundles/ng-table.min.js',
      './app/bower_components/angular-resource/angular-resource.min.js',
      './app/bower_components/angular-ui-select/dist/select.js',
      './app/bower_components/angular-sanitize/angular-sanitize.min.js',
      './app/app.module.js',
      './app/app.config.js',
      './app/modules/homeModule/homeModule.js',
      './app/modules/homeModule/headerComponent.js',
      './app/modules/homeModule/homeController.js',
      './app/modules/homeModule/homeService.js',
      './app/modules/homeModule/tableComponent.js',
      './app/modules/homeModule/app.resource.js',
      './app/partials/*.html',
      './test/**/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
