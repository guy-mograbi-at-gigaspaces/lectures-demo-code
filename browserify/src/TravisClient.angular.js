'use strict';
angular.module('travisjs',[]);


angular.module('travisjs').factory('TravisClient', function(){

    var superagent = require('superagent');
    return require('./lib/Client');

    var origGet = superagent.get;
    superagent.get = function( url ){

        var origEnd = origGet( url);

        return { end : function( callback ){
            origEnd( function(){
                $scope.$apply(callback);
            });
        } };


    };

});
