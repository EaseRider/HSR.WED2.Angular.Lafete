define(['app/model/event'], function(Event) {
	'use strict';

	var EventDetailController = function($scope, $routeParams, storageService) {
		this.scope = $scope;
		this.scope.event = storageService.events;
	}

	return EventListController;
});
