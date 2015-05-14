'use strict';


describe('repos', function () {
    describe('list branches', function () {
        it('should list branches', function () {
            travisClient.repos.branches('cloudify-cosmo/cloudify-js').end(function (err, res) {
                console.log(res.body.length);
                expect(res.body.hasOwnProperty('branches')).to.be(true);
                console.log('type of done is', typeof(done));
                done();
            });
        })
    });
});