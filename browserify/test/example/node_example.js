

var TravisClient = require('../../src/TravisClient');
var tc = new TravisClient({});


tc.repos.branches( 'cloudify-cosmo/cloudify-js').end(function(err,res){
    console.log(res.body);
});