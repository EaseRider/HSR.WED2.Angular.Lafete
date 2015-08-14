define(['tests/factories/eventFactory', 'app/model/event', 'app/services/storageService'],
	function (EventFactory, Event, StorageService) {
	'use strict';

	describe('EventStorageService test suite', function() {
		var event, storageService;

		// setup
		beforeEach(function() {
			storageService = new StorageService();
			event = EventFactory.createEvent();
 		});

		it('Expects return event or null', function() {
			storageService.events.add(event);
			expect(storageService.events.get(event.id)).toEqual(event);

			expect(storageService.events.get('')).toEqual(null);
			expect(storageService.events.get('abvhf74n6')).toEqual(null);
		});

		it('Expects return of all() is Array', function() {
			expect(storageService.events.all() instanceof Array).toBe(true);
		});

		it('Expects add() will add element only once', function() {
			var status1 = storageService.events.add(event);
			expect(status1).toBe(true);

			var size = storageService.events.all().length;
			var status2 = storageService.events.add(event);

			expect(storageService.events.all().length).toBe(size);
			expect(status2).toBe(false);
		});
	});
});
