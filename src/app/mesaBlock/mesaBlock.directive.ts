module vmA5 {
    'use strict';

    enum eCompoentType { Boiler = 20 };
  
    /** @ngInject */
    export function mesaBlockDialog($compile: any, $location: any): ng.IDirective {
        return {
            restrict: 'A',
            templateUrl: function(elem, attrs) {
                var path: string = $location.path();
                var blockDialogUrl: string;
                console.log(path);
                if (path == '/MesaBlock') {
                    blockDialogUrl = 'app/mesaBlock/Blocks/empty.html'
                }
                else {


                    // get componenttype from?? 
                    var eBlockType: eCompoentType = eCompoentType.Boiler;

                    switch (eBlockType) {
                        case eCompoentType.Boiler:
                            blockDialogUrl = 'app/mesaBlock/Blocks/boiler.html';
                            console.log('found a boiler');
                            break;
                        default:
                            blockDialogUrl = 'app/mesaBlock/Blocks/boiler.html';
                    }
                }


                return blockDialogUrl;

            },
        };
    }
}