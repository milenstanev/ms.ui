import angular from 'angular';
import inboxLayout from './views/inbox-layout.html!text';

let module = angular.module('app.inbox', []);

module.directive('prefixInbox', [() => {
	let directive = {
		template: inboxLayout,
		controller: ($scope) => {
			$scope.data = "Data";
		}
	};

	return directive;
}]);

module.run(
	function(prefixNavigationService, dashboardService) {
		prefixNavigationService.addButton(
			undefined,
			'Inbox',
			'',
			() => {
				dashboardService.addWidget('grid', 'Inbox', 'prefix-inbox');
			},
			false);
	}
);

export default module;
