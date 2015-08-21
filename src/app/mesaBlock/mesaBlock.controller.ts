module vmA5 {
  'use strict';    
  
  interface IProjectsScope extends ng.IScope {
       blocks:any;
       boilers:any; 
      }

  export class MesaBlockController {

    private $log: ng.ILogService;
    private $scope: IProjectsScope;
    private $location: ng.ILocationService;
    private $filter: ng.IFilterService;
    private vmWebAPI: VmWebAPI;
    
    /** @ngInject */
    constructor($log: ng.ILogService, $scope: IProjectsScope, $location: ng.ILocationService, $filter: ng.IFilterService, vmWebAPI: VmWebAPI) {
      this.$log = $log;
      this.$scope = $scope;
      this.$filter = $filter;
      this.$location = $location;
      this.vmWebAPI = vmWebAPI;
      this.activate();
    }

    activate() {
      var self: MesaBlockController = this;

      var OnComplete = function(data: any) {
 //       self.$log.debug('MesaBlockController.OnComplete');
        self.$scope.blocks = data;
        self.$scope.boilers = self.$filter('filter')(data, { eComponentType: 'vm_mbt_boiler' }, true);
        
      };

      var OnError = function(reason: any) {
        self.$log.debug('MesaBlockControler.OnError');
      };

      return this.vmWebAPI.getBlocks()
        .then(OnComplete, OnError);
    }

    NavigateTo = function() {
      console.log (this.$scope);
  //   this.$location.path('/MesaBlock/' + this.$scope.selectedBlock.sName);     // need to add the block to load the form on 
    }
  }
}

