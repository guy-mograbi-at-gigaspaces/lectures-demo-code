'use strict';
module.exports = function(config) {
    var configuration = {

        basePath: '',

        frameworks: ['browserify', 'jasmine'],

        files: [
            '../node_modules/expect.js/index.js',
            '../dist/TravisClient.vanilla.js',
            'spec/vanilla.js'

        ],

        exclude: [],

        preprocessors: {
            'spec/vanilla.js': ['browserify']
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
            'karma-browserify'],

        singleRun: true
    };

    config.set(configuration);
};