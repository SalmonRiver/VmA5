/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="index.route.ts" />
/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="mesaBlock/mesaBlock.controller.ts" />
/// <reference path="../app/mesaBlock/mesaBlock.directive.ts" />
/// <reference path="mesaBlock/blocks/boiler/boiler.controller.ts" />
/// <reference path="diagram/svg.controller.ts" />
/// <reference path="../app/diagram/svg.directive.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/malarkey/malarkey.directive.ts" />
/// <reference path="../app/components/webDevTec/webDevTec.service.ts" />
/// <reference path="../app/components/githubContributor/githubContributor.service.ts" />
/// <reference path="../app/components/vmWebApi/vmWebApi.ts" />

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

module vmA5 {
  'use strict';

  angular.module('vmA5', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .service('vmWebAPI', VmWebAPI)
    .controller('MainController', MainController)
    .controller('MesaBlockController', MesaBlockController)
    .controller('BoilerController', BoilerController)
    .controller('SvgController', SvgController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey)
    .directive('svg2Diagram', svg2Diagram)
    .directive('shape', shape)
    .directive('mesaBlockDialog', mesaBlockDialog);
}
