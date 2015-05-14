'use strict';
angular.module('travisjs',[]);


angular.module('travisjs').factory('TravisClient', function(){
    return require('./lib/Client');
});
