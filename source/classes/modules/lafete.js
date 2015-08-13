define(['frameworks/angular', 'app/controllers/eventListController', 'app/services/storageService', 'libraries/angularRoute'],
	function (Angular, EventListController, StorageService) {
	'use strict';

	/* modules */
	var Lafete = Angular.module('lafete',['ngRoute']);

	/* services */
	Lafete.service('StorageService', StorageService);

	/* controllers */
	EventListController.$inject = ['$scope', 'StorageService'];
	Lafete.controller('EventListController', EventListController);

	return Lafete;
});
