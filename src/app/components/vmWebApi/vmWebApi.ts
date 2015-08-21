module vmA5 {

  'use strict';

  export class VmWebAPI {

    private vmesaURL: string;
    private getBlocksUrl: string;
 //   private static blockDetailUrl: string = 'http://demo1.svmesa.com/VmWebApi/odata/VmMesaBlockProperties?$filter=BlockName eq ';
 //   private static blockOutPutUrl: string = 'http://demo1.svmesa.com/VmWebApi/Odata/VmBlockData?$filter=';

    private $http: ng.IHttpService;
    private $log: ng.ILogService;

    constructor($log: ng.ILogService, $http: ng.IHttpService) {
      this.$log = $log;
      this.$http = $http;
      this.vmesaURL = 'http://demo1.svmesa.com/VmWebApi/Odata';
      this.getBlocksUrl = this.vmesaURL + '/MesaBlocks';
    }

    getBlocks = function() {
      return this.$http.get(this.getBlocksUrl)

        .then(function(response: any) {
          return response.data.value;
        });
    };

    getBlockProperty = function(sBlockName: string, iPropertyIndex: number, iSolutuionIndex: number) {
      var BlockNameArgUrl: string = 'BlockName eq ' + '\'' + sBlockName + '\'';
      var PropertyIndexUrl: string = ' and PropertyIndex eq ' + iPropertyIndex;
      var SolutionUrl: string = ' and Solution eq ' + iSolutuionIndex;
      var DetailUrl: string = this.BlockOutPutUrl + BlockNameArgUrl + PropertyIndexUrl + SolutionUrl;
      // console.log(DetailUrl);

      return this.$http.get(DetailUrl)
        .then(function(response: any) {
          var mbReturn = response.data.value[0];
          // console.log(mbReturn);
          return mbReturn;
        });
    };

    getBlockNameFromGuidAndAct = function(scope: any) {
      // fixme need to add this feature to the VmWebApi
      return this.$http.get(this.vmesaURL) // find correct URL
        .then(function(response: any) {
          if (scope.componentType == 103) {
            scope.sBlockName = 'alky';
            }
          else {
            scope.sBlockName = 'Waste Heat LP Steam'; // fIXME
          }
          return scope;
        });
    }
  }
}