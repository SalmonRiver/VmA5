module vmA5 {
     'use strict';

    /** @ngInject */
    export function mesaBlockDialog($compile: any, $location: any): ng.IDirective {
        return {
            restrict: 'A',
            templateUrl: function(elem, attrs) {

                // get componenttype from?? 
                console.log('here');

                var blockDialogUrl = 'app/mesaBlock/Blocks/boiler.html';

                return blockDialogUrl;

            },
        };
    }
}