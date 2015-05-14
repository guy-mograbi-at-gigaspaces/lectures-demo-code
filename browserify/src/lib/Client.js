'use strict';

var Repos = require('./Repos');

module.exports = function TravisClient ( config ){
    this.repos = new Repos(config);
};