'use strict';


describe('travis client', function(){
    window.TravisClient = $.TravisClient;

    it('should exist', function(){
        expect(!!$.TravisClient).to.be(true);

    });

    require('./clientTest');
});