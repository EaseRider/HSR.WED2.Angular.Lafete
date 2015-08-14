define(['frameworks/angular', 'app/controllers/event/listController', 'app/controllers/event/detailController', 'app/services/storageService', 'libraries/angularRoute'],
	function (Angular, EventListController, EventDetailController, StorageService) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	/* services */
	Lafete.service('StorageService', StorageService);

	/* controllers */
	EventListController.$inject = ['$scope', 'StorageService'];
	Lafete.controller('EventListController', EventListController);

	EventDetailController.$inject = ['$scope', '$routeParams', 'StorageService'];
	Lafete.controller('EventDetailController', EventDetailController);

	/* routes */
	Lafete.config(function($routeProvider) {
		$routeProvider.when('/list', {
			controller: 'EventListController',
			templateUrl: '/views/list.html'
		})
		.when('/events/:eventId', {
			controller: 'EventDetailController',
			templateUrl: '/views/detail.html'
		})
		.otherwise({
			redirectTo: '/list'
		});
	});

	return Lafete;
});
