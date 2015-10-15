define(['app/controllers/event/listController', 'frameworks/angular', 'libraries/angularMocks', 'app/repository/eventRepository'],
	function (EventListController, Angular, AngularMocks, EventRepository) {
	'use strict';

	var eventListController;

	beforeEach(AngularMocks.inject(function ($rootScope) {
		var scope = $rootScope.$new();
		var eventRepository = new EventRepository();
		eventListController = new EventListController(scope, eventRepository);
	}));

	describe('EventListController test suite', function() {
		it('Expects 3 events on scope', function() {
			expect(3).toBe(eventListController.scope.events.length);
		});
	});
});
