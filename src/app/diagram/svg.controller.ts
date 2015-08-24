module vmA5 {
	'use strict';

	interface IProjectsScope extends ng.IScope {
		open(); 
	}

	export class SvgController {
		private $scope: IProjectsScope;

		/* @ngInject */
		constructor ( $scope: IProjectsScope, $modal) {
			this.$scope = $scope;

			this.$scope.open = function () {

				var modalInstance = $modal.open({
					templateUrl: '/app/mesaBlock/Blocks/boiler/boiler.html',
					//size: size,
					size: "lg"
					});
			};

		}
	}

};