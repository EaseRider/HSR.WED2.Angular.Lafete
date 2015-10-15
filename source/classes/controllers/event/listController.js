define(['app/model/event'], function(Event) {
	'use strict';

	var EventListController = function($scope, EventRepository) {
		this.scope = $scope;
		this.scope.events = EventRepository.all();
	}

	return EventListController;
});
