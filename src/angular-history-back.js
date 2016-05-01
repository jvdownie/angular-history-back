(function(){
    'use strict';

    angular
        .module('hBack')
        .directive('backButton', backButton);

    function backButton(){
        return {
            restrict: 'A',
            link: function($scope, $elem, $attr){
                $elem.bind('click', function(e){
                    window.history.back();
                })
            }
        };
    }

})();
