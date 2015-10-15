define(['tests/factories/eventFactory', 'app/model/event', 'app/repository/eventRepository'],
	function (EventFactory, Event, EventRepository) {
	'use strict';

	describe('EventRepository', function() {
		var event, eventRepository;

		// setup
		beforeEach(function() {
			eventRepository = new EventRepository();
			event = EventFactory.createEvent();
 		});


		describe('get()', function() {
			beforeEach(function() {
				eventRepository.add(event);
			});

			describe('by object id', function() {
				it('returns the object', function() {
					expect(eventRepository.get(event.id)).toEqual(event);
				});
			});

			describe('by inexistent object id', function() {
				it('returns null', function() {
					expect(eventRepository.get(null)).toEqual(null);
					expect(eventRepository.get('abvhf74n6')).toEqual(null);
				});
			});
		});

		describe('all()', function() {
			it('returns an Array', function() {
				expect(eventRepository.all()).toEqual(jasmine.any(Array));
			});
		});

		describe('add()', function() {
			it('inserts element', function() {
				var status1 = eventRepository.add(event);
				expect(status1).toBe(true);
			});

			describe('same element again', function() {
				var size, status2;

				beforeEach(function() {
					eventRepository.add(event);

					size = eventRepository.all().length;
					status2 = eventRepository.add(event);
				});

				it('doesn\'t affect repository size', function() {
					expect(eventRepository.all().length).toBe(size);
				});
				it('returns false', function() {
					expect(status2).toBe(false);
				});
			});
		});
	});
});
