'use strict';

var superagent = require('superagent');

/**
 *
 * @param {string} repository - repository slug or id
 */
function Repos( config ){
    this.config = config;
}

Repos.prototype.branches = function( repository ){
    return superagent.get('https://api.travis-ci.org/repos/' + repository + '/branches');
};


Repos.prototype.onlyInNode = function(){
    throw Error('not implemented for this environment. supports only node');
};

module.exports = Repos;

