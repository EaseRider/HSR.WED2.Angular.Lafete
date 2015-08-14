define(['app/model/event'], function(Event) {
	'use strict';

	var StorageService = function() {
		this.events = new (function() {
			var eventList = {};
			/**
			 * Find event by identifier
			 *
			 * @param string identifier
			 * @return Event or null
			 */
			this.get = function(identifier) {
				if(eventList.hasOwnProperty(identifier)) {
					return eventList[identifier];
				} else {
					return null;
				}
			};
			/**
			 * Get all events
			 *
			 * @return Event[]
			 */
			this.all = function() {
				return Object.keys(eventList).map(function (identifier) {
					return eventList[identifier];
				});
			};
			/**
			 * Add event if not already in list
			 * @param Event event
			 * @return boolean if added successfull
			 */
			this.add = function(event) {
				if(eventList.hasOwnProperty(event.id)) {
					return false;
				} else {
					eventList[event.id] = event;
					return true;
				}
			};
		})();

		// initialization
		this.events.add(
			new Event(
				'Lunch',
				null,
				'everyone',
				'nothing',
				{
					name: 'Luncheteria',
					street: 'Bahnhofstrasse',
					zipCode: 8640,
					city: 'Rapperswil'
				},
				null,
				{
					begin: new Date('2015-10-10T12:00:00.000Z'),
					end: new Date('2015-10-10T13:00:00.000Z')
				},
				null,
				'76ba7b42-0534-4d1f-9c0c-5b07488b0c2c'
			)
		);
		this.events.add(
			new Event(
				'Dinner',
				null,
				'everyone',
				'nothing',
				{
					name: 'Dinneria',
					street: 'Bahnhofstrasse',
					zipCode: 8000,
					city: 'Zürich'
				},
				null,
				{
					begin: new Date('2015-04-05T18:00:00.000Z'),
					end: new Date('2015-04-05T20:00:00.000Z')
				},
				null,
				'e27726fa-5334-41d1-8db0-f3d9510fcf89'
			)
		);
		this.events.add(
			new Event(
				'Dinner',
				null,
				'everyone',
				'nothing',
				{
					name: 'Dinneria',
					street: 'Wedelweg',
					zipCode: 8640,
					city: 'Rapperswil'
				},
				null,
				{
					begin: new Date('2015-12-08T17:00:00.000Z'),
					end: new Date('2015-12-08T19:00:00.000Z')
				},
				null,
				'39f0881d-ce23-44e9-81c3-1c8157380894'
			)
		);
	};

	return StorageService;
});
