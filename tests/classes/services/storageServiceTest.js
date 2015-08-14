define(['app/model/event', 'app/services/storageService'], function (Event, StorageService) {
	'use strict';

	describe('EventStorageService test suite', function() {
		var event, storageService;

		// setup
		beforeEach(function() {
			storageService = new StorageService();
			event = new Event(
				'Simons birthday',
				'The greatest birthday party simon ever had',
				'Friends of Simon',
				'drinks, cake, salad or snacks',
				{
					name: 'Simons house',
					street: 'Main street 5',
					zipCode: 8000,
					city: 'Zurich'
				},
				null,
				{
					begin: new Date('2015-10-10T18:00:00.000Z'),
					end: new Date('2015-10-11T02:00:00.000Z')
				},
				null
			);
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
