'use strict';

global.expect = require('expect.js');


describe('travis client', function(){
    it('should exist', function(){
        global.TravisClient = new require('../../src/TravisClient')({});
    });

    require('./initClient');
});

