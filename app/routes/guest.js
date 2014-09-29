import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('guest', params.guest_id);
  },

	actions: {
		deleteGuest: function() {
			var guest = this.currentModel,
					route = this;
			// Deleting the Guest will Delete any Registrations that they had
			guest.deleteRecord();
			guest.save().then(function() {
				route.transitionTo('guests');
			});
		}
	}
});
