'use strict';
module.exports = function(config) {
    var configuration = {

        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            '../node_modules/expect.js/index.js',
            '../3rd-parties/jquery/dist/jquery.js',
            '../dist/TravisClient.jquery.js',
            'spec/jquery.js'

        ],

        exclude: [],

        preprocessors: {
            'spec/jquery.js': ['browserify']
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['Chrome'],

        browserify: {
            debug: true,
            transform: []
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-browserify'
        ],

        singleRun: true
    };

    config.set(configuration);
};