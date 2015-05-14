'use strict';


describe('travis client', function(){
    beforeEach(window.module('travisjs'));
    it('should exist', inject(function( CloudifyClient ){
        window.TravisClient = CloudifyClient;
    }));

    require('./clientTest');

});


