define(['app/model/event'], function(Event) {
	'use strict';

	var NewEventController = function($scope, $routeParams, EventRepository) {
		this.scope = $scope;
		this.scope.event = new Event();
		console.log('hey');
		/*this.scope.add = function(newEvent) {
			EventRepository.add(
				newEvent,
				function(event) {},
				function() {}
			);
		}*/
	}

	return NewEventController;
});
