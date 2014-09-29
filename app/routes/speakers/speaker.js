import Ember from 'ember';

var SpeakerRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('speaker', params.id);
	},

	actions: {
		deleteSpeaker: function() {
			var speaker = this.currentModel,
					route = this;

			// VERSION: 1
			// Becuase functions in a for loop will retain the same reference to 
			// the index we create functions instead of nested for loops, where the objects 
			// will get passed in by value, for deleting our Workshops and Registrations
			// See http://jslinterrors.com/dont-make-functions-within-a-loop
			// function deleteRegistrations(registrations){
			// 	registrations.forEach(function(registration){
			// 		registration.deleteRecord();
			// 		registration.save();
			// 	});
			// }
			//
			// function deleteWorkshop(workshop){
			// 	// Delete any Registrations for the Workshop
			// 	workshop.get('registrations').then(function(registrations){
			// 		deleteRegistrations(registrations);
			// 		// Delete the Workshop
			// 		workshop.deleteRecord();
			// 		workshop.save();
			// 	});
			// }
			//
			// // First delete associated Workshops and Registrations
			// speaker.get('workshops').then(function(workshops){
			// 	workshops.forEach(function(workshop){
			// 		deleteWorkshop(workshop);
			// 	});
			//
			// 	// Then delete the Speaker
			// 	speaker.deleteRecord();
			// 	speaker.save().then(function() {
			// 		route.transitionTo('speakers');
			// 	});
			// });

			// VERSION: 2
			// Condensed version that accomplishes same as above as far as I can tell
			// // First delete associated Workshops and Registrations
			// speaker.get('workshops').then(function(workshops){
			// 	workshops.forEach(function(workshop){
			// 		workshop.get('registrations').then(function(registrations){
			// 			registrations.forEach(function(registration){
			// 				registration.deleteRecord();
			// 				registration.save();
			// 			});
			// 			// Delete the Workshop
			// 			workshop.deleteRecord();
			// 			workshop.save();
			// 		});
			// 	});
			//
			// 	// Then delete the Speaker
			// 	speaker.deleteRecord();
			// 	speaker.save().then(function() {
			// 		route.transitionTo('speakers');
			// 	});
			// });

			// VERSION: 3
			// We're using the DeletesDependentRelationships Mixin for deleting dependant relationships
			// If we delete the Speaker we will also delete their Workshops which will
			// also delete the Workshops Registrations
			speaker.deleteRecord();
			speaker.save().then(function() {
				route.transitionTo('speakers');
			});

		}
	}
});

export default SpeakerRoute;