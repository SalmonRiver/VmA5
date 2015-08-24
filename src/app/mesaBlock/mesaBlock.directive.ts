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
           //     console.log(path);
                if (path == '/MesaBlock') {
                    blockDialogUrl = 'app/mesaBlock/blocks/empty.html'
                }
                
                else {
                    // get componenttype from?? 
                    var eBlockType: eCompoentType = eCompoentType.Boiler;

                    switch (eBlockType) {
                        case eCompoentType.Boiler:
                            blockDialogUrl = 'app/mesaBlock/blocks/boiler/boiler.html';
                            console.log('found a boiler ' + path );
                            break;
                        default:
                            blockDialogUrl = 'app/mesaBlock/blocks/empty.html';
                    }
                }
                return blockDialogUrl;
            },
        };
    }
}
