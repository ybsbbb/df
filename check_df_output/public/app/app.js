'use strict';

var dfoutputApp = angular.module('dfoutputApp', []);

dfoutputApp.controller('DfCheckOutputController', function DfCheckOutputController($scope) {
    $scope.dfpaste = function() {
        $scope.results = $scope.dfOutputText.split('\n');
    };
});

dfoutputApp.filter('dfOutputFilter', function() {
    return function(text) {
        var tmptext = text.replace(/\s+/g,' ');
        var cols = tmptext.split(' ');
        if(cols.length != 6) {
            return null;
        }
        console.log(cols);
        var col4 = parseInt(cols[4].substring(0,cols[4].length-1));
        var col3 = parseInt(cols[3]);
        console.log("col3:" + col3);
        console.log("col4:" + col4);
        if(col4 > 75 && col3 < 3 * 1024 * 1024) {
            return text;
        }
    }
});
