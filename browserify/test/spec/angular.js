'use strict';


describe('travis client', function(){
    beforeEach(window.module('travisjs'));
    it('should exist', inject(function( TravisClient ){

        window.TravisClient = TravisClient;
        require('./clientTest/initClient');
    }));

    require('./clientTest/repos');

});




