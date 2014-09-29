import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createRegistration: function() {
			var self = this;
			var store = self.store;
			var guest_id = self.selectedGuest;
			var workshop_id = self.selectedWorkshop;

			// The guests and workshops were loaded in the Route setUpController method 
			// var registration = store.createRecord('registration', {name: self.selectedWorkshop.name});
			var registration = store.createRecord('registration');
			
			// Save the Registration
			registration.save().then(function() {
				// Add the Guest to the Registration
				store.find('guest', guest_id).then(function(guest) {
					guest.get('registrations').then(function(registrations) {
						registrations.addObject(registration);
						guest.save().then(function() {
							// Add the Workshop to the Registration
							store.find('workshop', workshop_id).then(function(workshop) {
								workshop.get('registrations').then(function(registrations) {
									registrations.addObject(registration);
									workshop.save().then(function(){
										// Add the Workshop name as the Registration name
										// TODO: Stupid that we have to save again just to set the name
										registration.set('name', workshop.get('name')); // This set the registration name and wiped the Guest...
										registration.save();
									});
								});
							});
						});
					});
				});

				self.transitionToRoute('registrations.index');
			});
		},
		cancel: function() {
			this.transitionToRoute('registrations');
		}
	}
});