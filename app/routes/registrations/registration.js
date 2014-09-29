import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	actions: {
		deleteRegistration: function() {
			var registration_id = this.currentModel.get('id'),
					registration = this.currentModel,
					route = this;

			// First delete the Registration from the Guest
			registration.get('guest').then(function(guest){
				guest.get('registrations').then(function(registrations){
					registrations.forEach(function(guest_registration){
						if (guest_registration.get('id') === registration_id){
							registrations.removeObject(guest_registration);
						}
					});
					guest.save();
				});
			});

			// Then delete the Registration from the Workshop
			registration.get('workshop').then(function(workshop){
				workshop.get('registrations').then(function(registrations){
					registrations.forEach(function(workshop_registration){
						if (workshop_registration.get('id') === registration_id){
							registrations.removeObject(workshop_registration);
						}
					});
					workshop.save();
				});
			});

			// Then delete the Registration
			registration.deleteRecord();
			registration.save().then(function(){
				route.transitionTo('registrations');
			});

		}
	}
});