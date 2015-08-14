define(['tests/factories/eventFactory','app/model/event'],
	function(EventFactory, Event) {
	'use strict';

	describe('Event test suite', function() {
		var event;

		// setup
		beforeEach(function() {
			event = EventFactory.createEvent();
 		});

		it('Expects changed event begin on set begin', function() {
			expect(event.begin)
				.toEqual(new Date('2015-10-10T18:00:00.000Z'));
			event.begin = new Date('2015-10-10T20:00:00.000Z');
			expect(event.begin)
				.toEqual(new Date('2015-10-10T20:00:00.000Z'));
		});

		it('Expects changed event end on set end', function() {
			expect(event.end)
				.toEqual(new Date('2015-10-11T02:00:00.000Z'));
			event.end = new Date('2015-10-11T04:00:00.000Z');
			expect(event.end)
				.toEqual(new Date('2015-10-11T04:00:00.000Z'));
		});

		it('Expects event id to be UUID', function() {
			var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
			expect(event.id).toMatch(uuidRegex);
		});
	});
});
