module vmA5 {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($routeProvider: ng.route.IRouteProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .when('/MesaBlock', {
          templateUrl: 'app/mesaBlock/mesaBlock.html',
          controller: 'MesaBlockController',
          controllerAs: 'mesaBlock'
        })
        .when('/MesaBlock/:BlockName', {
          templateUrl: 'app/mesaBlock/mesaBlock.html',
          controller: 'MesaBlockController',
          controllerAs: 'mesaBlock'
        })

        .when('/svg/:DiagramName', {
          templateUrl: 'app/diagram/svg.html',
          controller: 'SvgController',
          controllerAs: 'svg'
        })
        .otherwise({
          redirectTo: '/'
        });
        
    }
  }
}
