define(['app/model/event'], function(Event) {
	'use strict';

	var EventDetailController = function($scope, $routeParams, storageService) {
		this.scope = $scope;
		this.scope.events = storageService.events;
	}

	return EventListController;
});
