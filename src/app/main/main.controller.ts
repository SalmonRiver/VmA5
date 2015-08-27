module vmA5 {
  'use strict';

  interface IProjectsScope extends ng.IScope {
    callData();
  }

  export class MainController {
    public awesomeThings: ITecThing[];
    public webDevTec: WebDevTecService;
    public classAnimation: string;
    public $scope: IProjectsScope;

    /* @ngInject */
    constructor ($timeout: ng.ITimeoutService, webDevTec: WebDevTecService, toastr: Toastr, $scope: IProjectsScope) {
      this.awesomeThings = new Array();
      this.webDevTec = webDevTec;
      this.classAnimation = '';
      this.activate($timeout);
      this.$scope = $scope;
      this.$scope.callData = function() {
        alert("This is calling block data from Visual Mesa's web API.\n Here is the sample-call: \n\n http://demo1.svmesa.com/VmWebApi/Odata/VmBlockData?$filter=BlockName eq 'BOILER-2-Coal' and PropertyIndex eq 8 and Solution eq 1\n\nHere is the sample-response: \n\n{BlockName: BOILER-2-Coal, PropertyIndex: 8, Solution: 1, StringValue: 667.136, DataType: double}");
      };
    }

    activate($timeout: ng.ITimeoutService) {
      this.getWebDevTec();

      var self = this;

      $timeout(function() {
        self.classAnimation = 'rubberBand';
      }, 4000);
    }

    showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      this.classAnimation = '';
    }

    getWebDevTec() {
      this.awesomeThings = this.webDevTec.tec;
    }
  }
}
