// Karma configuration
// Generated on Sat Aug 22 2015 21:47:33 GMT+1000 (AEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // avoid: 'WARNING: Tried to load angular more than once.'
        {pattern: './dist/js/bundle.js'},
        {pattern: './node_modules/angular-mocks/angular-mocks.js', watch: false},
        {pattern: './test/*.js'}
    ],


    // list of files to exclude
    exclude: [
    ],


    // browserify: {
    //     watch: true,
    //     debug: true
    // },
    // preprocessors: {
    //     './app/scripts/*.js': ['browserify'],
    //     './app/scripts/*/*.js': ['browserify']
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    // browsers: ['Chrome', 'Firefox', 'Safari'],
    // only in chrome for now
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
