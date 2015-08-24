module vmA5 {
  'use strict';
  interface ILocalScope extends ng.IScope {
    boiler: boiler;
  }

  enum eStatus { On = 1, Off = 2, Unavailable = 3, SlowRoll = 4, FastRoll = 5, CalibrateOnly = 6 };


  export class BoilerController {

    private $log: ng.ILogService;
    private $scope: ILocalScope;
    private $location: ng.ILocationService;
    private $filter: ng.IFilterService;
    private vmWebAPI: VmWebAPI;
    
    
    /** @ngInject */
    constructor($log: ng.ILogService, $scope: ILocalScope, $location: ng.ILocationService, $filter: ng.IFilterService, vmWebAPI: VmWebAPI) {
      this.$log = $log;
      this.$filter = $filter;
      this.$location = $location;
      this.vmWebAPI = vmWebAPI;

      this.$scope = $scope;
      this.$scope.boiler = new boiler();
      this.$scope.boiler.sBlockName = $location.url().replace("/MesaBlock/", "")
      this.$scope.boiler.dFlow = 11;
      this.activate();
    }


    activate() {
      var self: BoilerController = this;

      var OnComplete = function(data: any) {
        self.$scope.boiler.onDataReturn(data);
        // self.$scope.boiler = data;
      };

      var OnError = function(reason: any) {
        self.$log.debug('BoilerController.OnError');
      };


      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 7, 1)
        .then(OnComplete, OnError);
      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 8, 1)
        .then(OnComplete, OnError);
      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 9, 1)
        .then(OnComplete, OnError);
      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 10, 1)
        .then(OnComplete, OnError);
      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 11, 1)
        .then(OnComplete, OnError);
      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 64, 1)
        .then(OnComplete, OnError);
      this.vmWebAPI.getBlockProperty(this.$scope.boiler.sBlockName, 90, 1)
        .then(OnComplete, OnError);

    }

  }


  class boiler {
    public sBlockName: string;
    public dFlow: Number;
    public dDuty: number;
    public dTemperature: number;
    public dEfficiency: number;
    public dBlowDown: number;
    public dPressure: number;
    public sDutyUnits: string = "mmBtu/Hr";
    public sFlowUnits: string = "kLb/Hr";
    public sTemperatureUnits: string = "F";
    public sPressureUnits: string = "PSIG";
    public sBlowDownUnits: string = "%";
    public sEfficiencyUnits: string = "%";
    public sDescription: string = "Some text about the block goes here.  can have line feeds etc";


    public bFlowIfTrue: boolean;
    public bExhaustPressureIfTrue: boolean;

    public status: string;

    constructor() { }
    onDataReturn(MesaBlockValues) {
      //console.log(MesaBlockValues);

      if (MesaBlockValues.StringValue == "Invalid Property") {
        console.log(" No data returned");
        return;
      }

      if (MesaBlockValues.PropertyIndex == '7') {
      //  console.log("flow found " + MesaBlockValues.StringValue);
        this.dFlow = MesaBlockValues.StringValue;
        if (this.dFlow > 0) this.bFlowIfTrue = true
        else this.bFlowIfTrue = false;
      }
      else if (MesaBlockValues.PropertyIndex == '8') {
        this.dTemperature = MesaBlockValues.StringValue;
      }
      else if (MesaBlockValues.PropertyIndex == '9') {
        this.dEfficiency = MesaBlockValues.StringValue;
      }
      else if (MesaBlockValues.PropertyIndex == '10') {
        this.dBlowDown = MesaBlockValues.StringValue;
      }
      else if (MesaBlockValues.PropertyIndex == '11') {
        this.dPressure = MesaBlockValues.StringValue;
        if (this.dPressure == 0) this.bExhaustPressureIfTrue = true
        else this.bExhaustPressureIfTrue = false
      }
      else if (MesaBlockValues.PropertyIndex == '64') {
        this.dDuty = MesaBlockValues.StringValue;
      }
      else if (MesaBlockValues.PropertyIndex == '90') {
        var iStatus = MesaBlockValues.StringValue;
        this.status = eStatus[iStatus];
     //   console.log(this.status);
      }
    }
  }
}

