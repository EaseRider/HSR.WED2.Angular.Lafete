define(['tests/factories/eventFactory', 'app/model/event', 'app/repository/eventRepository'],
	function (EventFactory, Event, EventRepository) {
	'use strict';

	describe('EventRepository test suite', function() {
		var event, eventRepository;

		// setup
		beforeEach(function() {
			eventRepository = new EventRepository();
			event = EventFactory.createEvent();
 		});

		it('Expects return event or null', function() {
			eventRepository.add(event);
			console.log(eventRepository.events);
			expect(eventRepository.get(event.id)).toEqual(event);

			expect(eventRepository.get('')).toEqual(null);
			expect(eventRepository.get('abvhf74n6')).toEqual(null);
		});

		it('Expects return of all() is Array', function() {
			expect(eventRepository.all() instanceof Array).toBe(true);
		});

		it('Expects add() will add element only once', function() {
			var status1 = eventRepository.add(event);
			expect(status1).toBe(true);

			var size = eventRepository.all().length;
			var status2 = eventRepository.add(event);

			expect(eventRepository.all().length).toBe(size);
			expect(status2).toBe(false);
		});
	});
});
