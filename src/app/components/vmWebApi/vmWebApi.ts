module vmA5 {

  'use strict';

  /** @ngInject */
  export class vmWebAPI {

    private vmesaURL: string;
    private getBlocksUrl: string;
    private blockDetailUrl: string;
    //   private static blockDetailUrl: string = 'http://demo1.svmesa.com/VmWebApi/odata/VmMesaBlockProperties?$filter=BlockName eq ';
    //   private static blockOutPutUrl: string = 'http://demo1.svmesa.com/VmWebApi/Odata/VmBlockData?$filter=';

    private $http: ng.IHttpService;
    private $log: ng.ILogService;

    constructor($log: ng.ILogService, $http: ng.IHttpService) {
      this.$log = $log;
      this.$http = $http;
      this.vmesaURL = 'http://demo1.svmesa.com/VmWebApi/Odata';
      this.blockDetailUrl = this.vmesaURL + '/VmBlockData?$filter=BlockName eq ';

      this.getBlocksUrl = this.vmesaURL + '/MesaBlocks';
    }

    getBlocks = function() {
      return this.$http.get(this.getBlocksUrl)

        .then(function(response: any) {
          return response.data.value;
        });
    };

    getBlockProperty = function(sBlockName: string, iPropertyIndex: number, iSolutuionIndex: number) {
      
      //  console.log ("getBlockProperty sBlockName=" + sBlockName );
      
      var BlockNameArgUrl: string = '\'' + sBlockName + '\'';
      var PropertyIndexUrl: string = ' and PropertyIndex eq ' + iPropertyIndex;
      var SolutionUrl: string = ' and Solution eq ' + iSolutuionIndex;
      var DetailUrl: string = this.blockDetailUrl + BlockNameArgUrl + PropertyIndexUrl + SolutionUrl;
      //console.log(DetailUrl);

      return this.$http.get(DetailUrl)
        .then(function(response: any) {
          var mbReturn = response.data.value[0];
          //console.log(mbReturn);
          return mbReturn;
        });
    };

    getBlockNameFromGuidAndAct = function(scope: any) {
      // fixme need to add this feature to the VmWebApi
      return this.$http.get(this.vmesaURL) // find correct URL
        .then(function(response: any) {
          console.log(scope.sourceGuid);

          if (scope.componentType == 103) {
            
// this is just a simple hard coding  from file examination
            switch (scope.sourceGuid) {
              case "BC066933-9C4E-4C37-94B8-037FED689D91":
                scope.sBlockName = 'BoilerPlant';
                break;
              case "76A920B2-370E-4603-B13F-F398AAFD6BA6":
                scope.sBlockName = 'Alky';
                break;
              case "CF58A680-FFEE-41ED-AB03-D9AB9EEFFCA2":
                scope.sBlockName = 'crude';
                break;
              case "B9ACD43A-D9C8-4F85-9ED6-8F6110CF7EFF":
                scope.sBlockName = 'fcc';
                break;
              default:
                scope.sBlockName = 'ThePlant';
                break;
            }
          }
          else {
            scope.sBlockName = 'Waste Heat LP Steam'; // fIXME
          }
          return scope;
        });
    }
  }
}