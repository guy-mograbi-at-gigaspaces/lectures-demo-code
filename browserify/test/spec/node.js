'use strict';

global.expect = require('expect.js');


describe('travis client', function(){
    it('should exist', function(){
        global.TravisClient = require('../../src/TravisClient');
        require('./clientTest/initClient');
    });
    require('./clientTest/repos');
});



