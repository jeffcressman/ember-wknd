import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('registration', params.id);
	},

  setupController: function(controller, model) {
  	controller.set('selectedGuest', model.get('guest').get('name'));
  	controller.set('currentWorkshop', model.get('workshop'));
  	controller.set('selectedWorkshop', '');
    controller.set('workshops', this.store.find('workshop'));
    this._super(controller, model); // need this to pass the model on
  },

	deactivate: function() {
		this.currentModel.rollback();
	},

	actions: {
		save: function() {
			// Because Registrations belong to Guests and Workshops we need to remove the Registration
			// from the old Workshop and add it to the new one
			var route = this;
			var self = this;
			var store = self.store;
			var current_registration = this.controller.model;
			var registration_id = this.controller.model.get('id');
			var current_workshop = this.controller.currentWorkshop;
			var new_workshop_id = this.controller.selectedWorkshop;

			// Delete the current registration from the current workshop
			current_workshop.get('registrations').then(function(registrations) {
				registrations.forEach(function(registration){
					if( registration.get('id') === registration_id){
						registrations.removeObject(registration);
					}
				});
				// Even though we've requested the registrations above it doesn't necessarily
				// mean that the workshop has been loaded so we use then to resolve the Promise
				current_workshop.then(function(workshop){
					workshop.save();
				});

				// Add the current registration to the new workshop
				store.find('workshop', new_workshop_id).then(function(workshop){
					workshop.get('registrations').then(function(registrations) {
						registrations.addObject(current_registration);
						workshop.save().then(function(){
							current_registration.set('name', workshop.get('name'));
							current_registration.save().then(function(updated_registration){
								route.transitionTo('registrations.registration', updated_registration);
							});
						});
					});
				});
			});
		},

		cancel: function() {
			this.transitionTo('registrations.registration', this.currentModel);
		}
	}
});