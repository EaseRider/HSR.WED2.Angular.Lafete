define(['app/services/uuidService'], function(UUIDService) {
	'use strict';

	var Event = function(name, description, targetGroup, contributionsDescription, location, times, maximalAmoutOfGuests, id) {
		this.id = id || UUIDService.getRandomUuid();
		this.name = name;
		this.description = description;
		this.targetGroup = targetGroup;
		this.contributionsDescription = contributionsDescription;
		this.location = location;
		this.times = times;
		this.maximalAmoutOfGuests = maximalAmoutOfGuests;

		Object.defineProperty(this, 'begin', {
			get: function() {
				return this.times.begin;
			},
			set: function(begin) {
				this.times.begin = begin;
			}
		});

		Object.defineProperty(this, 'end', {
			get: function() {
				return this.times.end;
			},
			set: function(end) {
				this.times.end = end;
			}
		});
	};

	/**
	 * Create Event object from data transfer object (json object)
	 */
	Event.createFromDTO = function(eventDTO) {
		var event = new Event(
			eventDTO.name,
			eventDTO.description,
			eventDTO.targetGroup,
			eventDTO.contributionsDescription,
			eventDTO.location,
			eventDTO.times,
			eventDTO.maximalAmoutOfGuests,
			eventDTO.id
		);
		if(eventDTO.guests) {
			event.guests = eventDTO.guests;
		}
		return event;
	};

	return Event;
});
