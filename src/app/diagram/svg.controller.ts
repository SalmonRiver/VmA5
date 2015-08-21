module vmA5 {
	'use strict';

	export class SvgController {
		private $scope: any;



		/* @ngInject */
		constructor ( $scope: ng.IScope) {
			this.$scope = $scope
			this.$scope.dynamicPopover = {
				content: 'Hello, World!',
				templateUrl: 'app/mesaBlock/mesaBlock.html',
				title: 'Mesa Block Form',
				windowClass: 'app-modal-window'
			};
		}
	}
}