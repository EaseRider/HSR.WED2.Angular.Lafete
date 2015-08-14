define(['frameworks/angular', 'app/controllers/event/listController', 'app/services/storageService', 'libraries/angularRoute'],
	function (Angular, EventListController, StorageService) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	/* services */
	Lafete.service('StorageService', StorageService);

	/* controllers */
	EventListController.$inject = ['$scope', 'StorageService'];
	Lafete.controller('EventListController', EventListController);

	/* routes */
	Lafete.config(function($routeProvider) {
		$routeProvider.when('/list', {
			controller: 'EventListController',
			templateUrl: '/views/list.html'
		})
		.otherwise({
			redirectTo: '/list'
		});
	});

	return Lafete;
});
