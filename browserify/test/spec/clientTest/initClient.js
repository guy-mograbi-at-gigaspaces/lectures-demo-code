'use strict';

if ( TravisClient ) {
    var g = typeof(window) !== 'undefined' ? window : global;


    g.travisClient = new TravisClient({});
}