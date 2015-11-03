define([], function() {
	'use strict';

	var NewEventController = function($scope, $routeParams, EventRepository) {
		this.scope = $scope;
		this.scope.add = function(newEvent) {
			EventRepository.add(
				newEvent, 
				function(event) {}, 
				function() {}
			);
		}
	}

	return NewEventController;
});
